from os.path import join
from copy import deepcopy
from typing import List, Dict, Union

from compechem.systems import System
from compechem.engines.orca import OrcaInput
from compechem.tools.cubetools import Cube


FUKUI_CUBE_WARNING = "Fukui function cube file, the atomic charges column contains the localized Mulliken-charge-based fukui values"


def calculate_fukui(
    molecule: System,
    orca: OrcaInput,
    spins_states: Union[None, List[int]] = None,
    cube_dim: int = 250,
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
    maxcore: int
        The maximum amount of memory in MB to be allocated for each core.

    Returns
    -------
    Dict[str, List[float]]
        The dictionary of dictionaries containing the localized fukui function computed from
        the Mulliken charges. The key (either f+, f- or f0) encodes the type of Fukui function.
    """
    # Compute a single point for the molecule
    orca.spe(molecule, save_cubes=True, cube_dim=cube_dim, inplace=True, maxcore=maxcore)

    # Compute a single point for the molecule with the addition of one electron.
    cation = deepcopy(molecule)
    cation.charge += 1

    if spins_states is not None:
        cation.spin = spins_states[2]
    else:
        cation.spin = 1 if molecule.spin == 2 else 2

    orca.spe(cation, save_cubes=True, cube_dim=cube_dim, inplace=True, maxcore=maxcore)

    # Compute a single point for the molecule with the subtraction of one electron.
    anion = deepcopy(molecule)
    anion.charge -= 1

    if spins_states is not None:
        anion.spin = spins_states[0]
    else:
        anion.spin = 1 if molecule.spin == 2 else 2

    orca.spe(anion, save_cubes=True, cube_dim=cube_dim, inplace=True, maxcore=maxcore)

    # Load cubes from the output_densities folder
    cubes: Dict[int, Cube] = {}
    for mol in [cation, molecule, anion]:
        cubename = f"{mol.name}_{mol.charge}_{mol.spin}_{orca.method}_spe.eldens.cube"
        cube = Cube.from_file(join("./output_densities", cubename))
        cubes[mol.charge] = cube

    # Check if all the densities have been loaded correctly
    if len(cubes) != 3:
        raise RuntimeError(f"Three cube files expected, {len(cubes)} found.")

    # Compute the localized fukui function values from the mulliken charges
    localized_fukui = {"f+": [], "f-": [], "f0": []}
    for atom in range(molecule.geometry.atomcount):
        localized_fukui["f+"].append(
            anion.properties.mulliken_charges[atom] - molecule.properties.mulliken_charges[atom]
        )
        localized_fukui["f-"].append(
            molecule.properties.mulliken_charges[atom] - cation.properties.mulliken_charges[atom]
        )
        localized_fukui["f0"].append(
            (anion.properties.mulliken_charges[atom] - cation.properties.mulliken_charges[atom]) / 2
        )

    # Compute the f+ Fukui function
    f_plus = cubes[anion.charge] - cubes[molecule.charge]
    f_plus.charges = localized_fukui["f+"]
    f_plus.save(
        join("./output_densities", f"{molecule.name}_Fukui_plus.fukui.cube"),
        comment_1st=FUKUI_CUBE_WARNING,
        comment_2nd="Fukui f+",
    )

    # Compute the f- Fukui function
    f_minus = cubes[molecule.charge] - cubes[cation.charge]
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
    
    molecule.properties.set_condensed_fukui_mulliken(localized_fukui, orca)

    return localized_fukui
    