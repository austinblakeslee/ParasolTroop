#pragma strict
static var turnNum : int;
static var play1turn : boolean;
static var ceasefire : int;
static var battlePhase : boolean;
static var player1Spot : GameObject;
static var player2Spot : GameObject;
public var playText : GUIText;

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
	if(TurnOrder.play1turn == true) {
		playText.text = "Player 1's Turn";
	}
	else {
		playText.text = "Player 2's Turn";
	}
}