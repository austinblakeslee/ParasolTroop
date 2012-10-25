#pragma strict

class Ballista extends SectionWeapon {
    function Start() {
        this.damage = 20;
        this.spcost = 50;
        this.cost = 100;
        this.weight = 50;
        this.range = 1;
        this.wtype = "ballista";
    }
}
