import subprocess
from tempfile import NamedTemporaryFile as tmp

from os import system
from os.path import join, abspath, basename
from copy import deepcopy
from typing import List, Dict, Union

from compechem.systems import System
from compechem.wrappers.orca import OrcaInput
from compechem.tools.cubetools import Cube


FUKUI_CUBE_WARNING = "Fukui function cube file, the atomic charges column contains the localized Mulliken-charge-based fukui values"


def calculate_fukui(
    molecule: System,
    orca: OrcaInput,
    spins_states: Union[None, List[int]] = None,
    cube_dim: int = 250,
    optimize: bool = False,
    maxcore: int = 1000,
) -> Dict[str, Dict[str, List[float]]]:
    """
    Computes the Fukui f+, f- and f0 functions starting from a given input molecule. The
    functions are saved in Gaussian cube format and stored in the `output_densities` folder.
    Localized Fukui functions are also computed from the Mulliken charges and returned as a
    dictionary.

    Parameters
    ----------
    molecule: System
        The System object containing the geometry of the selected molecule (if the geometry
        has not been optimized, please enable the optimize option)
    orca: OrcaInput
        The orca input wrapper object that defines the protocol to be used in the calculation.
    spin_states: Union[None, List[int]]
        If set to None, when adding or subtracting electrons will automatically switch the
        spin state from singlet to doublet and vice versa (Maximum one unpaired electrons).
        If manually set to `List[int]` will force the spin multeplicities according to the
        user specified values. The order of the spin multiplicity values is: molecule with
        one electron added (-1), the molecule as it is (0) and the molecule  with one of its
        electrons removed (+1).
    cube_dim: int
        Resolution for the cube files (default 250)
    optimize: bool
        If set to True, it will run the optimization of the origin system at the same level
        of theory specified by the method option.
    maxcore: int
        The maximum amount of memory in MB to be allocated for each core.

    Returns
    -------
    Dict[str: Dict[str, List[float]]]
        The dictionary of dictionaries containing the localized fukui function computed from
        the Mulliken charges. The external key encodes the levelo of theory used and the
        basis-set while the inner keyword (either f+, f- or f0) encodes the type of Fukui function.
    """
    # Make a copy of the oriCompute a single point for the original molecule
    origin = deepcopy(molecule)
    if optimize:
        orca.opt(origin, save_cubes=True, cube_dim=cube_dim, inplace=True, maxcore=maxcore)
    else:
        orca.spe(origin, save_cubes=True, cube_dim=cube_dim, inplace=True, maxcore=maxcore)

    # Compute a single point for the molecule with the addition of one electron.
    cation = deepcopy(origin)
    cation.charge += 1

    if spins_states is not None:
        cation.spin = spins_states[2]
    else:
        cation.spin = 1 if origin.spin == 2 else 2

    orca.spe(cation, save_cubes=True, cube_dim=cube_dim, inplace=True, maxcore=maxcore)

    # Compute a single point for the molecule with the subtraction of one electron.
    anion = deepcopy(origin)
    anion.charge -= 1

    if spins_states is not None:
        anion.spin = spins_states[0]
    else:
        anion.spin = 1 if origin.spin == 2 else 2

    orca.spe(anion, save_cubes=True, cube_dim=cube_dim, inplace=True, maxcore=maxcore)

    # Load cubes from the output_densities folder
    cubes: Dict[int, Cube] = {}
    for mol in [cation, origin, anion]:

        cubename = f"{mol.name}_{mol.charge}_{mol.spin}_{orca.method}"
        cubename += "_opt" if origin and optimize is True else "_spe"
        cubename += ".eldens.cube"

        cube = Cube.from_file(join("./output_densities", cubename))
        cubes[mol.charge] = cube

    # Check if all the densities have been loaded correctly
    if len(cubes) != 3:
        raise RuntimeError(f"Three cube files expected, {len(cubes)} found.")

    # Compute the localized fukui function values from the mulliken charges
    localized_fukui = {"f+": [], "f-": [], "f0": []}
    for atom in range(origin.atomcount):
        localized_fukui["f+"].append(
            anion.mulliken_atomic_charges[atom] - origin.mulliken_atomic_charges[atom]
        )
        localized_fukui["f-"].append(
            origin.mulliken_atomic_charges[atom] - cation.mulliken_atomic_charges[atom]
        )
        localized_fukui["f0"].append(
            (anion.mulliken_atomic_charges[atom] - cation.mulliken_atomic_charges[atom]) / 2
        )

    # Compute the f+ Fukui function
    f_plus = cubes[anion.charge] - cubes[origin.charge]
    f_plus.charges = localized_fukui["f+"]
    f_plus.save(
        join("./output_densities", f"{molecule.name}_Fukui_plus.fukui.cube"),
        comment_1st=FUKUI_CUBE_WARNING,
        comment_2nd="Fukui f+",
    )

    # Compute the f- Fukui function
    f_minus = cubes[origin.charge] - cubes[cation.charge]
    f_minus.charges = localized_fukui["f-"]
    f_minus.save(
        join("./output_densities", f"{molecule.name}_Fukui_minus.fukui.cube"),
        comment_1st=FUKUI_CUBE_WARNING,
        comment_2nd="Fukui f-",
    )

    # Compute the f0 Fukui function
    f_zero = (cubes[anion.charge] - cubes[cation.charge]).scale(0.5)
    f_zero.charges = localized_fukui["f0"]
    f_zero.save(
        join("./output_densities", f"{molecule.name}_Fukui_zero.fukui.cube"),
        comment_1st=FUKUI_CUBE_WARNING,
        comment_2nd="Fukui f0",
    )

    return {f"{orca.method}|{orca.basis_set}": localized_fukui}


def render_fukui_cubes(cubfile: str):

    root_name = basename(cubfile).strip(".fukui.cube")
    print(root_name)

    vmd_path = subprocess.check_output("which vmd", shell=True).decode("utf-8").strip("/bin/vmd\n")
    print("PATH: ", vmd_path)

    vmd_dir = abspath(f"/{vmd_path}") 
    print("DIR: ", vmd_dir)

    tachyon_path = join(vmd_dir, "lib/vmd/tachyon_LINUXAMD64")
    print(tachyon_path)

    with tmp(mode="w+") as vmd_script:

        vmd_script.write(
            f"""
            mol addrep 0
            display projection Orthographic
            display resetview
            mol new {cubfile} type {{cube}} first 0 last -1 step 1 waitfor 1 volsets {{0 }}
            animate style Loop
            axes location Off
            mol modstyle 0 0 CPK 1.000000 0.300000 12.000000 12.000000
            mol color Name
            mol representation CPK 1.000000 0.300000 150.000000 12.000000
            mol selection all
            mol material Opaque
            mol addrep 0
            mol modcolor 1 0 Volume 0
            mol modstyle 1 0 Isosurface 0.003000 0 0 0 1 1
            mol modmaterial 1 0 Translucent
            display shadows on
            display ambientocclusion on
            display dof on
            color Display Background white
            color Element C black
            mol modcolor 0 0 Element
            mol scaleminmax 0 1 0.000000 1.000000
            render Tachyon {root_name}.dat "{tachyon_path}" -fullshade -aasamples 12 %s -format TARGA -res 4800 4800 -o %s.png
            exit
            """
        )
        
        vmd_script.seek(0)

        system(f"vmd -dispdev text -e {vmd_script.name}")

    


    