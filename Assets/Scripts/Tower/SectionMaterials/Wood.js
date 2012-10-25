#pragma strict

class Wood extends SectionMaterial {
    function Start () {
        this.initialSP = 100;
        this.maxSP = 300;
        this.cost = 50;
        this.weightPerSP = 0.01;
        this.SPPerRepair = 100;
        this.costPerRepair = 50;
        this.mtype = "wood";
    }
}
