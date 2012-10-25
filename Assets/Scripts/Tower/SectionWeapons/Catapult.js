#pragma strict

class Catapult extends SectionWeapon {
    function Start () {
        this.damage = 25;
        this.spcost = 50;
        this.cost = 100;
        this.weight = 30;
        this.range = 2;
        this.wtype = "catapult";
    }
}
