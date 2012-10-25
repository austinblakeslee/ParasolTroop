#pragma strict

class Stone extends SectionMaterial {
    function Start () {
        this.initialSP = 200;
        this.maxSP = 400;
        this.cost = 150;
        this.weightPerSP = 0.05;
        this.SPPerRepair = 75;
        this.costPerRepair = 75;
        this.mtype = "stone";
    }
}
