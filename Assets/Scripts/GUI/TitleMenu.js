#pragma strict

var showMenu : boolean = true;

function Start () {

}

function Update () {
	
}

function OnGUI() {
	
	if (showMenu)
	{
		GUI.Box (Rect (Screen.width*0.5 - 10,Screen.height*0.5-30,100,90), "Menu");
		
		if (GUI.Button(Rect(Screen.width*0.5,Screen.height*0.5,80,20),"START!!!")) {
			Application.LoadLevel("Test");
	    }
		else if (GUI.Button(Rect(Screen.width*0.5,Screen.height*0.5 + 30,80,20),"Options")) {
			GameObject.FindGameObjectWithTag("Game Values").GetComponent(GameValues).setShowOptionsMenu(true);
			showMenu = false;
	    }
	    //else if (GUI.Button(Rect(Screen.width*0.525,Screen.height*0.7,Screen.width*0.05,Screen.height*0.05),"Quit")) {
		//	Application.Quit();
	    //}
	}
	else
	{
		if (GUI.Button(Rect(Screen.width*0.8,Screen.height*0.9,80,20),"Menu")) {
			GameObject.FindGameObjectWithTag("Game Values").GetComponent(GameValues).setShowOptionsMenu(false);
			showMenu = true;
	    }
	}
}