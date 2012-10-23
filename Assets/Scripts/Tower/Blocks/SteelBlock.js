#pragma strict

private var sp : int;
private var initsp : int;
private var maxsp : int ;
private var spcap : int;
private var cost : int;
private var weightsp : double;
//private var weight : double;
private var sprepair : int;
private var repaircost : int;
private var weapon : GameObject;
private var mtype = "";
	
	// Use this for initialization
	function Start () {
		sp = 300;
		initsp = 300;
		maxsp = 600;
		cost = 200;
		weightsp = 0.1;
		sprepair = 50;
		repaircost = 75;
		mtype = "steel";
		//weight = (sp * weightsp) + weapon.getWeight();
	}
	
	// Update is called once per frame
	function Update () {
		//weight = (sp * weightsp) + weapon.getWeight();
		//spcap = maxsp - weapon.getSPCost();
	}
	
	function repair () {
		sp += sprepair;
		//playermaterials - cost;
	}
	
	function setWeapon(w : GameObject)
	{
		weapon = w;
	}
	
	function Ouch() {
		sp = sp - 0; //Calculate Damage from weapon
	}