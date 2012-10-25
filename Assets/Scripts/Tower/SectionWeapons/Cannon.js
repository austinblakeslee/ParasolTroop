#pragma strict

class Cannon extends SectionWeapon {
    function Start () {
        this.damage = 75;
        this.spcost = 200;
        this.cost = 400;
        this.weight = 80;
        this.range = 3;
        this.wtype = "cannon";
    }
}
