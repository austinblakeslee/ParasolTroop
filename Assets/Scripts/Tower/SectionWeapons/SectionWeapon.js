#pragma strict
protected var damage : int;
protected var spcost : int;
protected var cost : int;
protected var weight : int;
protected var range : int;
protected var wtype = "ballista";

function GetWeaponType() : String {
    return wtype;
}

function GetDamage() : int {
    return damage;
}

function GetSPCost() : int {
    return spcost;
}

function GetCost() : int {
    return cost;
}

function GetWeight() : int {
    return weight;
}

function GetRange() : int {
    return range;
}
