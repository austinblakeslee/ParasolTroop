#pragma strict

class Steel extends SectionMaterial {
    function Start () {
        this.initialSP = 300;
        this.maxSP = 600;
        this.cost = 200;
        this.weightPerSP = 0.1;
        this.SPPerRepair = 50;
        this.costPerRepair = 75;
        this.mtype = "steel";
    }
}
