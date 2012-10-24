#pragma strict

//This class belongs to the the player class and holds all the blocks in a tower.


private var blocks : ArrayList;
private var maxHeight : int;
private var owner : GameObject;
private var materials : int;


function Start () {
	maxHeight = GameObject.FindGameObjectWithTag("Game Values").GetComponent(GameValues).towerHeight;
	blocks = new ArrayList(maxHeight);
}

function Update () {
	
}

function getBlocks()
{
	return blocks;
}

//Calculates the weight on a given block
function calcWeight(index : int)
{
	
}
