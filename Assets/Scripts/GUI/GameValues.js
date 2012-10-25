#pragma strict

//the collection to hold all editable values
private var allValues : ArrayList;

//player editable values
public var turnTime : int = 30;
public var baseResources : int = 100;
public var towerHeight : int = 10;

public var values : Hashtable;
values = new Hashtable();
values.Add("turnTime", turnTime);
values.Add("baseResources", baseResources);
values.Add("towerHeight", towerHeight);

//class values
private var showOptionsMenu : boolean = false;

function Start () {
	allValues = new ArrayList();
	allValues.Add(turnTime);
	allValues.Add(baseResources);
	
	
	Application.DontDestroyOnLoad(this.gameObject);
}

function Update () {

}

function GetAllValues()
{
	return allValues;
}

function setShowOptionsMenu(bool : boolean)
{
	showOptionsMenu = bool;
}

function OnGUI()
{
	if (showOptionsMenu)
	{
		ShowOptions();
	}
}

function ShowOptions()
{
	//Options Menu Display
	GUI.Label(Rect(20,200,160,20),"Turn Time = " + turnTime);
	turnTime = GUI.HorizontalSlider(Rect(20,220,100,20),turnTime,20,120);
	
	GUI.Label(Rect(20,240,160,20),"Starting Resources = " + baseResources);
	baseResources = GUI.HorizontalSlider(Rect (20,260, 100, 20), baseResources,50,1000);
	
	GUI.Label(Rect(20,280,160,20),"Max Tower Height = " + towerHeight);
	towerHeight = GUI.HorizontalSlider(Rect (20,300, 100, 20), towerHeight,5,20);
}