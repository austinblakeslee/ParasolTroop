#pragma strict

private var enlarge : boolean = true;
private var shrink : boolean = false;
private var menuText : GameObject;
private var updateTime : float;


function Start () {
	menuText = GameObject.FindGameObjectWithTag("Menu Text");
	
	updateTime = Time.time;
}

function Update () {
	if (enlarge && (Time.time - updateTime >= 0.025))
	{
		updateTime = Time.time;
		menuText.guiText.fontSize += 1;
	}
	else if (shrink && (Time.time - updateTime >= 0.025))
	{
		updateTime = Time.time;
		menuText.guiText.fontSize -= 1;
	}
	
	if (menuText.guiText.fontSize >= 70)
	{
		shrink = true;
		enlarge = false;
	}
	else if (menuText.guiText.fontSize <= 50)
	{
		shrink = false;
		enlarge = true;
	}
}