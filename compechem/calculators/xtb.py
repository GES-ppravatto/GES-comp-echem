import os, shutil
from tempfile import mkdtemp
from compechem.calculators import tools


class XtbInput:
    """Interface for running xTB calculations
    """

    def __init__(
        self,
        method: str = "gfn2",
        nproc: int = 1,
        solvation: bool = True,
        solvent: str = "water",
        optionals: str = "",
    ) -> None:
        """
        Parameters
        ----------
        method : str, optional
            level of theory, by default "gfn2"
        nproc : int, optional
            number of cores, by default 1
        solvation : bool, optional
            ALPB implicit solvation model, by default True
        solvent : str, optional
            ALPB solvent, by default "water"
        optionals : str, optional
            optional keywords/flags, by default ""
        """

        self.method = method

        self.nproc = nproc
        self.solvation = solvation
        self.solvent = solvent
        self.optionals = optionals

    def spe(self, mol, remove_tdir=True):
        """Single point energy calculation.

        Parameters
        ----------
        mol : Molecule object
            Input molecule to use in the calculation.
        remove_tdir : bool, optional
            Temporary work directory will be removed, by default True

        Returns
        -------
        Updates the mol.energies dictionary adding an entry with:
            method
            electronic energy
        """

        parent_dir = os.getcwd()
        print(f"INFO: {mol.name} - {self.method} SPE")

        tdir = mkdtemp(
            prefix=mol.name + "_",
            suffix=f"_{self.method.split()[0]}_spe",
            dir=os.getcwd(),
        )

        os.chdir(tdir)
        mol.write_xyz("geom.xyz")

        if self.solvation is True:
            os.system(
                f"xtb geom.xyz --{self.method} --alpb {self.solvent} --charge {mol.charge} --uhf {mol.spin-1} -P {self.nproc} {self.optionals} > output.out 2>> output.out"
            )

        else:
            os.system(
                f"xtb geom.xyz --{self.method} --charge {mol.charge} --uhf {mol.spin-1} -P {self.nproc} {self.optionals} > output.out 2>> output.out"
            )

        with open("output.out", "r") as out:
            for line in out:
                if "TOTAL ENERGY" in line:
                    electronic_energy = float(line.split()[-3])

        mol.energies[f"{self.method}"] = mol.Energies(
            method=f"{self.method}", electronic=electronic_energy,
        )

        if remove_tdir is True:
            shutil.rmtree(tdir)
        os.chdir(parent_dir)

    def opt(self, mol, remove_tdir=True):
        """Geometry optimization + frequency analysis.

        Parameters
        ----------
        mol : Molecule object
            input molecule to use in the calculation
        remove_tdir : bool, optional
            temporary work directory will be removed, by default True

        Returns
        -------
        Updates the molecular geometry and mol.energies dictionary 
        adding an entry with:
            method
            electronic energy
            vibronic contribution
        
        If a dissociation or a cyclization is observed, ignore the calculation.
        """

        parent_dir = os.getcwd()
        print(f"INFO: {mol.name} - {self.method} OPT")

        tdir = mkdtemp(
            prefix=mol.name + "_",
            suffix=f"_{self.method.split()[0]}_opt",
            dir=os.getcwd(),
        )

        os.chdir(tdir)
        mol.write_xyz("geom.xyz")

        if self.solvation is True:
            os.system(
                f"xtb geom.xyz --{self.method} --alpb {self.solvent} --charge {mol.charge} --uhf {mol.spin-1} --ohess -P {self.nproc} {self.optionals} > output.out 2>> output.out"
            )

        else:
            os.system(
                f"xtb geom.xyz --{self.method} --charge {mol.charge} --uhf {mol.spin-1} --ohess -P {self.nproc} {self.optionals} > output.out 2>> output.out"
            )

        if tools.dissociation_check(mol) is True:
            return

        tools.cyclization_check(mol, "geom.xyz", "xtbopt.xyz")

        with open("output.out", "r") as out:
            for line in out:
                if "TOTAL ENERGY" in line:
                    electronic_energy = float(line.split()[-3])
                if "G(RRHO) contrib." in line:
                    vibronic_energy = float(line.split()[-3])

        mol.energies[f"{self.method}"] = mol.Energies(
            method=f"{self.method}",
            electronic=electronic_energy,
            vibronic=vibronic_energy,
        )

        mol.update_geometry("xtbopt.xyz")

        if remove_tdir is True:
            shutil.rmtree(tdir)
        os.chdir(parent_dir)

    def freq(self, mol, remove_tdir=True):
        """Frequency analysis.

        Parameters
        ----------
        mol : Molecule object
            input molecule to use in the calculation
        remove_tdir : bool, optional
            temporary work directory will be removed, by default True

        Returns
        -------
        Updates the mol.energies dictionary adding an entry with:
            method
            electronic energy
            vibronic contribution
        """

        parent_dir = os.getcwd()
        print(f"INFO: {mol.name} - {self.method} FREQ")

        tdir = mkdtemp(
            prefix=mol.name + "_",
            suffix=f"_{self.method.split()[0]}_freq",
            dir=os.getcwd(),
        )

        os.chdir(tdir)
        mol.write_xyz("geom.xyz")

        if self.solvation is True:
            os.system(
                f"xtb geom.xyz --{self.method} --alpb {self.solvent} --charge {mol.charge} --uhf {mol.spin-1} --hess -P {self.nproc} {self.optionals} > output.out 2>> output.out"
            )

        else:
            os.system(
                f"xtb geom.xyz --{self.method} --charge {mol.charge} --uhf {mol.spin-1} --hess -P {self.nproc} {self.optionals} > output.out 2>> output.out"
            )

        with open("output.out", "r") as out:
            for line in out:
                if "TOTAL ENERGY" in line:
                    electronic_energy = float(line.split()[-3])
                if "G(RRHO) contrib." in line:
                    vibronic_energy = float(line.split()[-3])

        mol.energies[f"{self.method}"] = mol.Energies(
            method=f"{self.method}",
            electronic=electronic_energy,
            vibronic=vibronic_energy,
        )

        if remove_tdir is True:
            shutil.rmtree(tdir)
        os.chdir(parent_dir)

