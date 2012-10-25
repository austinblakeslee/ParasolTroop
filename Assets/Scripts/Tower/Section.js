#pragma strict

class Section {
    private var mat : SectionMaterial;
    private var weapon : SectionWeapon;

    function Section(newMat : SectionMaterial, newWeapon : SectionWeapon) {
        this.mat = newMat;
        this.weapon = newWeapon;
    }

    function GetMaterial() : SectionMaterial {
        return this.mat;
    }

    function GetWeapon() : SectionWeapon {
        return this.weapon;
    }

    function SetMaterial(newMat : SectionMaterial) {
        mat = newMat;
    }

    function SetWeapon(newWeapon : SectionWeapon) {
        weapon = newWeapon;
    }
}
