#pragma strict
var type : String;
static var showMenu : boolean;
var pause : boolean;
var steelFloor : GameObject;
var brickFloor : GameObject;
var woodFloor : GameObject;
var sp : GameObject;
private var counter : int = 0;
var maxHeight : int = 6;
private var canEnable : boolean = true;


var Steel : boolean = true;
var Brick : boolean = true;
var brickCounter : int = 0;
var Cannon : boolean = true;
var canCounter : int = 0;

function Start () {
	showMenu = false;
	pause = false;
}

function Update () {
	if (Input.GetKeyDown(KeyCode.P)) {
		if(pause == false) {
			pause = true;
			Time.timeScale = 0.0;
		}
		else {
			pause = false;
			Time.timeScale = 1.0;
		}
	}
	if (Input.GetKeyDown(KeyCode.T)) {
	GameObject.FindGameObjectWithTag("Player").transform.position.y += 25;
	}
}

function OnGUI() {

	//if (canEnable && !showMenu && Input.GetKeyDown(KeyCode.Space))
	//{
		//showMenu = true;
		//GameObject.FindGameObjectWithTag("GUI Instructions").guiText.text = "Select Tower segments.\nYou may only select 1 Steel, 2 Cannons, and 2 Bricks.\nMax tower height is 6";
	//}

	if(!pause) {
	if(showMenu) {
		if (GUI.Button(Rect(Screen.width*0.25,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Wood")) {
        	type = "wood";
        	//showMenu = false;
        	SpawnFloor();
        	TurnOrder.play1turn = !(TurnOrder.play1turn);
        }
        else if (Brick && GUI.Button(Rect(Screen.width*0.45,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Brick")) {
        	type = "brick";
        	//showMenu = false;
        	SpawnFloor();
        	brickCounter++;
        	
        	if (brickCounter >= 2)
        	{
        		Brick = false;
        	}
        	TurnOrder.play1turn = !(TurnOrder.play1turn);
        }
    	else if (Steel && GUI.Button(Rect(Screen.width*0.65,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Steel")) {
        	type = "steel";
        	//showMenu = false;
        	SpawnFloor();
        	Steel = false;
        	TurnOrder.play1turn = !(TurnOrder.play1turn);
        }
    }
    }
    else {
    	if (GUI.Button(Rect(Screen.width*0.25,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Resume")) {
        	pause = false;
        }
    	else if (GUI.Button(Rect(Screen.width*0.45,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Restart")) {
        	pause = false;
        	Time.timeScale = 1.0;
        	Application.LoadLevel("Test");
        }
    	else if (GUI.Button(Rect(Screen.width*0.65,Screen.height*0.5,Screen.width*0.1,Screen.height*0.1),"Quit")) {
        	pause = false;
        }
    }
    
    checkHeight();
}

function SpawnFloor() {
	
	sp.transform.position = GameObject.FindGameObjectWithTag("Player").transform.position;

	var temp : GameObject;

	if(type == "wood") {
		if(TurnOrder.play1turn) {
			temp = Instantiate(woodFloor,Vector3(sp.transform.position.x,sp.transform.position.y+30,sp.transform.position.z),Quaternion.identity);
			TurnOrder.player1height += 1;
		}
		else {
			temp = Instantiate(woodFloor,Vector3(sp.transform.position.x,sp.transform.position.y+30,sp.transform.position.z),Quaternion.identity);
			TurnOrder.player2height += 1;
		}
		temp.tag = "Player Block";
		//showMenu = true;
	}
	else if(type == "steel") {
		if(TurnOrder.play1turn) {
			temp = Instantiate(steelFloor,Vector3(sp.transform.position.x,sp.transform.position.y+30,sp.transform.position.z),Quaternion.identity);
			TurnOrder.player1height += 1;
		}
		else {
			temp = Instantiate(steelFloor,Vector3(sp.transform.position.x,sp.transform.position.y+30,sp.transform.position.z),Quaternion.identity);
			TurnOrder.player2height += 1;
		}
		temp.tag = "Player Block";
		//showMenu = true;
	}
	else if(type == "brick") {
		if(TurnOrder.play1turn) {
			temp = Instantiate(brickFloor,Vector3(sp.transform.position.x,sp.transform.position.y+30,sp.transform.position.z),Quaternion.identity);
			TurnOrder.player1height += 1;
		}
		else {
			temp = Instantiate(brickFloor,Vector3(sp.transform.position.x,sp.transform.position.y+30,sp.transform.position.z),Quaternion.identity);
			TurnOrder.player2height += 1;
		}
		temp.tag = "Player Block";
		//showMenu = true;
	}
		
	GameObject.FindGameObjectWithTag("Player").transform.position.y += 25;
	
	counter++;
}

function checkHeight()
{
	if (counter >= maxHeight)
	{
		showMenu = false;
		canEnable = false;
		
		GameObject.FindGameObjectWithTag("MainCamera").GetComponent(BasicCameraController).finishedBuilding();
		
		Debug.Log("Max tower height reached, no more blocks can be placed.\n Start stage 2");
	}
}