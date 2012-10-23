#pragma strict

private var Towers : ArrayList;
public var playerResources : int;

function Start () {
	Towers = new ArrayList();
	playerResources = GameObject.FindGameObjectWithTag("Game Values").GetComponent(GameValues).baseResources;
}

function Update () {

}


function AddTower(t : Tower)
{
	Towers.Add(t);
}