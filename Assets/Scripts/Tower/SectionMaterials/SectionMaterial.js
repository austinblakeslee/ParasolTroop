#pragma strict

protected var initialSP : int;
protected var maxSP : int;
protected var cost : int;
protected var weightPerSP : float;
protected var SPPerRepair : int;
protected var costPerRepair : int;
protected var mtype : String = "abstract";

function GetInitialSP() {
    return initialSP;
}

function GetMaxSP() {
    return maxSP;
}

function GetCost() {
    return cost;
}

function GetWeightPerSP() {
    return weightPerSP;
}

function GetSPPerRepair() {
    return SPPerRepair;
}

function GetCostPerRepair() {
    return costPerRepair;
}

function GetMaterialType() {
    return mtype;
}
