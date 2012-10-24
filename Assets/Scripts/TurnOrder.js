#pragma strict
private var turnNum : int;
private var play1turn : boolean;
private var ceasefire : int;
private var battlePhase : boolean;

function Start () {
	play1turn = true;
	turnNum = 00;
	ceasefire = 10;
	battlePhase = false;
}

function Update () {
	if(turnNum > ceasefire) {
		battlePhase = true;
	}
}