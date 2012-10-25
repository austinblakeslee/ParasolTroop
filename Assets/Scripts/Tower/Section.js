#pragma strict

class Section extends MonoBehaviour {
    private var material : SectionMaterial;
    private var weapon : SectionWeapon;
    private var sp : int;
    private var maxSP : int;

    function Section(newMat : SectionMaterial, newWeapon : SectionWeapon) {
        this.material = newMat;
        this.weapon = newWeapon;
        this.sp = this.material.GetInitialSP();
        this.maxSP = this.material.GetMaxSP() - this.weapon.GetSPCost();
    }

    function GetMaterial() : SectionMaterial {
        return this.material;
    }

    function GetWeapon() : SectionWeapon {
        return this.weapon;
    }

    function ChangeMaterial(newMat : SectionMaterial) {
        material = newMat;
    }

    function ChangeWeapon(newWeapon : SectionWeapon) {
        weapon = newWeapon;
    }

    function GetWeight() : int {
        return this.material.GetWeightPerSP() * this.sp + this.weapon.GetWeight();
    }

    function GetCost() : int {
        return this.material.GetCost() + this.weapon.GetCost();
    }

    function GetCostPerRepair() : int {
        return this.material.GetCostPerRepair();
    }

    function Repair() {
        this.sp += this.material.GetSPPerRepair();
        if(this.sp > this.maxSP) {
            this.sp = this.maxSP;
        }
    }

    function SubtractSP(i : int) {
        this.sp -= i;
    }

    function AddSP(i : int) {
        this.sp += i;
    }
}
