import os, shutil
from tempfile import mkdtemp

from pyparsing import Or
from compechem.molecule import Molecule


class OrcaInput:
    """Interface for running Orca calculations.
    """

    def __init__(
        self,
        method: str,
        basis_set: str = "def2-TZVP",
        aux_basis: str = "def2/J",
        nproc: int = 1,
        maxcore: int = 350,
        solvation: bool = False,
        solvent: str = "water",
        optionals: str = "",
    ) -> None:
        """
        Parameters
        ----------
        method : str
            level of theory
        basis_set : str, optional
            basis set, by default "def2-TZVP"
        aux_basis : str, optional
            auxiliary basis set for RIJCOSX, by default "def2/J"
        nproc : int, optional
            number of cores, by default 1
        maxcore : int, optional
            memory per core, in MB, by default 350
        solvation : bool, optional
            CPCM(SMD) implicit solvation model, by default False
        solvent : str, optional
            SMD solvent, by default "water"
        optionals : str, optional
            optional keywords, by default ""
        """

        self.method = method
        self.basis_set = basis_set
        self.aux_basis = aux_basis
        self.nproc = nproc
        self.maxcore = maxcore
        self.solvation = solvation
        self.solvent = solvent
        self.optionals = optionals

    def spe(self, mol, charge=None, spin=None, remove_tdir=True):
        """Single point energy calculation.

        Parameters
        ----------
        mol : Molecule object
            input molecule to use in the calculation
        charge : int, optional
            total charge of the molecule. Default is taken from the input molecule.
        spin : int, optional
            total spin of the molecule. Default is taken from the input molecule.
        remove_tdir : bool, optional
            temporary work directory will be removed, by default True

        Returns
        -------
        newmol : Molecule object
            Output molecule containing the new energies.
        """

        if charge is None:
            charge = mol.charge
        if spin is None:
            spin = mol.spin

        parent_dir = os.getcwd()
        print(f"INFO: {mol.name}, charge {charge} spin {spin} - {self.method} SPE")

        tdir = mkdtemp(
            prefix=mol.name + "_", suffix=f"_{self.method.split()[0]}_spe", dir=os.getcwd(),
        )

        os.chdir(tdir)
        mol.write_xyz(f"{mol.name}.xyz")

        with open("input.inp", "w") as inp:
            inp.write(
                f"%pal nproc {self.nproc} end\n"
                f"%maxcore {self.maxcore}\n"
                f"! {self.method} {self.basis_set} {self.optionals}\n"
                f"! RIJCOSX {self.aux_basis}\n"
            )
            if self.solvation is True:
                inp.write("%CPCM\n" "  SMD True\n" f'  SMDsolvent "{self.solvent}"\n' "end\n")
            inp.write(f"* xyzfile {charge} {spin} {mol.name}.xyz\n")

        os.system("$ORCADIR/orca input.inp > output.out")

        with open("output.out", "r") as out:
            for line in out:
                if "FINAL SINGLE POINT ENERGY" in line:
                    electronic_energy = float(line.split()[-1])

        newmol = Molecule(f"{mol.name}.xyz", charge, spin)

        newmol.energies = mol.energies

        vibronic_energy = None

        if self.method in mol.energies:
            vibronic_energy = mol.energies[f"{self.method}"].vibronic

        newmol.energies[f"{self.method}"] = newmol.Energies(
            method=f"{self.method}", electronic=electronic_energy, vibronic=vibronic_energy
        )

        newmol.energies[f"{self.method}"] = newmol.Energies(
            method=f"{self.method}", electronic=electronic_energy,
        )

        if remove_tdir is True:
            shutil.rmtree(tdir)
        os.chdir(parent_dir)

        return newmol

    def opt(self, mol, charge=None, spin=None, remove_tdir=True):
        """Geometry optimization + frequency analysis.

        Parameters
        ----------
        mol : Molecule object
            input molecule to use in the calculation
        charge : int, optional
            total charge of the molecule. Default is taken from the input molecule.
        spin : int, optional
            total spin of the molecule. Default is taken from the input molecule.
        remove_tdir : bool, optional
            temporary work directory will be removed, by default True

        Returns
        -------
        newmol : Molecule object
            Output molecule containing the new geometry and energies.
        """

        if charge is None:
            charge = mol.charge
        if spin is None:
            spin = mol.spin

        parent_dir = os.getcwd()
        print(f"INFO: {mol.name}, charge {charge} spin {spin} - {self.method} OPT")

        tdir = mkdtemp(
            prefix=mol.name + "_", suffix=f"_{self.method.split()[0]}_opt", dir=os.getcwd(),
        )

        os.chdir(tdir)
        mol.write_xyz(f"{mol.name}.xyz")

        with open("input.inp", "w") as inp:
            inp.write(
                f"%pal nproc {self.nproc} end\n"
                f"%maxcore {self.maxcore}\n"
                f"! {self.method} {self.basis_set} {self.optionals}\n"
                f"! RIJCOSX {self.aux_basis}"
            )
            if self.solvation is True:
                inp.write(
                    "! Opt NumFreq\n"
                    "%CPCM\n"
                    "  SMD True\n"
                    f'  SMDsolvent "{self.solvent}"\n'
                    "end\n"
                )
            else:
                inp.write("! Opt Freq\n")
            inp.write(f"* xyzfile {charge} {spin} {mol.name}.xyz\n")

        os.system("$ORCADIR/orca input.inp > output.out")

        with open("output.out", "r") as out:
            for line in out:
                if "FINAL SINGLE POINT ENERGY" in line:
                    electronic_energy = float(line.split()[-1])
                if "G-E(el)" in line:
                    vibronic_energy = float(line.split()[-4])

        newmol = Molecule(f"{mol.name}.xyz", charge, spin)

        newmol.energies = mol.energies

        newmol.energies[f"{self.method}"] = newmol.Energies(
            method=f"{self.method}", electronic=electronic_energy, vibronic=vibronic_energy
        )

        if remove_tdir is True:
            shutil.rmtree(tdir)
        os.chdir(parent_dir)

        return newmol

    def freq(self, mol, charge=None, spin=None, remove_tdir=True):
        """Frequency analysis (analytical frequencies).

        Note: if the SMD solvation model is detected, defaults to numerical frequencies
        (analytical frequencies are not currently supported)

        Parameters
        ----------
        mol : Molecule object
            input molecule to use in the calculation
        charge : int, optional
            total charge of the molecule. Default is taken from the input molecule.
        spin : int, optional
            total spin of the molecule. Default is taken from the input molecule.
        remove_tdir : bool, optional
            temporary work directory will be removed, by default True

        Returns
        -------
        newmol : Molecule object
            Output molecule containing the new energies.
        """

        if charge is None:
            charge = mol.charge
        if spin is None:
            spin = mol.spin

        parent_dir = os.getcwd()
        print(f"INFO: {mol.name}, charge {charge} spin {spin} - {self.method} FREQ")

        tdir = mkdtemp(
            prefix=mol.name + "_", suffix=f"_{self.method.split()[0]}_freq", dir=os.getcwd(),
        )

        os.chdir(tdir)
        mol.write_xyz(f"{mol.name}.xyz")

        with open("input.inp", "w") as inp:
            inp.write(
                f"%pal nproc {self.nproc} end\n"
                f"%maxcore {self.maxcore}\n"
                f"! {self.method} {self.basis_set} {self.optionals}\n"
                f"! RIJCOSX {self.aux_basis}"
            )
            if self.solvation is True:
                inp.write(
                    "! NumFreq\n"
                    "%CPCM\n"
                    "  SMD True\n"
                    f'  SMDsolvent "{self.solvent}"\n'
                    "end\n"
                )
            else:
                inp.write("! Freq\n")
            inp.write(f"* xyzfile {charge} {spin} {mol.name}.xyz\n")

        os.system("$ORCADIR/orca input.inp > output.out")

        with open("output.out", "r") as out:
            for line in out:
                if "FINAL SINGLE POINT ENERGY" in line:
                    electronic_energy = float(line.split()[-1])
                if "G-E(el)" in line:
                    vibronic_energy = float(line.split()[-4])

        newmol = Molecule(f"{mol.name}.xyz", charge, spin)

        newmol.energies = mol.energies

        newmol.energies[f"{self.method}"] = newmol.Energies(
            method=f"{self.method}", electronic=electronic_energy, vibronic=vibronic_energy
        )

        if remove_tdir is True:
            shutil.rmtree(tdir)
        os.chdir(parent_dir)

        return newmol

    def nfreq(self, mol, charge=None, spin=None, remove_tdir=True):
        """Frequency analysis (numerical frequencies).

        Parameters
        ----------
        mol : Molecule object
            input molecule to use in the calculation
        charge : int, optional
            total charge of the molecule. Default is taken from the input molecule.
        spin : int, optional
            total spin of the molecule. Default is taken from the input molecule.
        remove_tdir : bool, optional
            temporary work directory will be removed, by default True

        Returns
        -------
        newmol : Molecule object
            Output molecule containing the new energies.
        """

        if charge is None:
            charge = mol.charge
        if spin is None:
            spin = mol.spin

        parent_dir = os.getcwd()
        print(f"INFO: {mol.name}, charge {charge} spin {spin} - {self.method} NFREQ")

        tdir = mkdtemp(
            prefix=mol.name + "_", suffix=f"_{self.method.split()[0]}_nfreq", dir=os.getcwd(),
        )

        os.chdir(tdir)
        mol.write_xyz(f"{mol.name}.xyz")

        with open("input.inp", "w") as inp:
            inp.write(
                f"%pal nproc {self.nproc} end\n"
                f"%maxcore {self.maxcore}\n"
                f"! {self.method} {self.basis_set} {self.optionals}\n"
                f"! RIJCOSX {self.aux_basis}\n"
                "! NumFreq\n"
            )
            if self.solvation is True:
                inp.write("%CPCM\n" "  SMD True\n" f'  SMDsolvent "{self.solvent}"\n' "end\n")

            inp.write(f"* xyzfile {charge} {spin} {mol.name}.xyz\n")

        os.system("$ORCADIR/orca input.inp > output.out")

        with open("output.out", "r") as out:
            for line in out:
                if "FINAL SINGLE POINT ENERGY" in line:
                    electronic_energy = float(line.split()[-1])
                if "G-E(el)" in line:
                    vibronic_energy = float(line.split()[-4])

        newmol = Molecule(f"{mol.name}.xyz", charge, spin)

        newmol.energies = mol.energies

        newmol.energies[f"{self.method}"] = newmol.Energies(
            method=f"{self.method}", electronic=electronic_energy, vibronic=vibronic_energy
        )

        if remove_tdir is True:
            shutil.rmtree(tdir)
        os.chdir(parent_dir)

        return newmol


class M06(OrcaInput):
    def __init__(self, nproc=1, maxcore=350):
        super().__init__(
            method="M062X",
            basis_set="def2-TZVP",
            aux_basis="def2/J",
            nproc=nproc,
            maxcore=maxcore,
            solvation=True,
            solvent="water",
            optionals="D3ZERO",
        )

