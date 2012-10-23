#pragma strict

//Autolocks onto nearest block of another tower

var targets : GameObject[];
var damping : float = 0.01;


function Start () {

}

function Update () {
	findTargets();
	
	if (targets.Length > 0)
	{
		transform.LookAt(targets[0].transform.position);
     	transform.Rotate(Vector3.up, 270);
		//rotateToObject(targets[0]);
	}
	
	Debug.Log("Number of targets is " + targets.Length);
}

function findTargets()
{
	if (this.gameObject.tag == "Player Block")
	{
		targets = GameObject.FindGameObjectsWithTag("Enemy Block");
	}
	else
	{
		targets = GameObject.FindGameObjectsWithTag("Player Block");
	}
}


function rotateToObject(target : GameObject)
{
	var rotation = Quaternion.LookRotation(target.transform.position - transform.position);
    transform.rotation = Quaternion.Slerp(rotation, transform.rotation, Time.deltaTime * damping);
    //transform.Rotate(Vector3.up, 0);
}