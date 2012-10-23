#pragma strict

var start : boolean = true;
var hexs : GameObject[];
private var returnarray : Collider[];
private var closestObject : GameObject;
var moveSpeed : float = 1.0;
private var canMove : boolean = true;


function Start () {
}

function Update () {

	//animate arrow.... to bad it moves camera too
	transform.position.y += 0.05 * Mathf.Sin(10 * Time.time + Mathf.PI);
	transform.eulerAngles.y += 1;


	/*
	if (start)
	{
		start = false;
		hexs = GameObject.FindGameObjectsWithTag("Hexagram");
		
		this.transform.position.x = hexs[0].transform.parent.gameObject.transform.position.x;
		this.transform.position.z = hexs[0].transform.parent.gameObject.transform.position.z;
		
		closestObject = hexs[0].transform.parent.gameObject;
	}
	
	returnarray = Physics.OverlapSphere (this.transform.position, 0.85);
    
    //find the nearest hexagon
    for (var hit : Collider in returnarray) 
    {
	     if(hit.gameObject.tag == "Hexagram")
	     {
	     	Debug.Log("Hexgram near");
             if (Vector3.Distance(this.transform.position, hit.gameObject.transform.parent.gameObject.transform.position) < Vector3.Distance(this.transform.position, closestObject.transform.position))
             {
             	closestObject = hit.transform.parent.gameObject;
             }
	     }
	
	}	
	
	if (Vector3(Input.GetAxis("Vertical"), 0, -Input.GetAxis("Horizontal")) == Vector3.zero)
	{
		//snap to a nearby hexagon
		this.transform.position.x -= (this.transform.position.x - closestObject.transform.position.x) * 0.175;
		this.transform.position.z -= (this.transform.position.z - closestObject.transform.position.z) * 0.175;
	}
	else if (this.transform.position.x <= -22 || this.transform.position.z >= 100 || this.transform.position.z <= 20 || this.transform.position.x >= 52)
	{
		canMove = false;
	}
	
	
	if (canMove)
	{
		this.transform.position += moveSpeed * Vector3(Input.GetAxis("Vertical"), 0, -Input.GetAxis("Horizontal")); 
	}
	else
	{
	
		//snap to a nearby hexagon
		this.transform.position.x -= (this.transform.position.x - closestObject.transform.position.x) * 0.05;
		this.transform.position.z -= (this.transform.position.z - closestObject.transform.position.z) * 0.05;
				
		if (Vector3.Distance(this.transform.position, closestObject.transform.position) < 1.1)
		{
			canMove = true;
		}
	}
	
	if (canMove)
	{
		Debug.Log("You can move");
	}
	else
	{
		Debug.Log("You can't move");
	}

	Debug.Log("Closest Hex is " + Vector3.Distance(this.transform.position, closestObject.transform.position));

	/*if (transform.position.y < 0)
	{
		this.rigidbody.velocity = 2 * Vector3(Input.GetAxis("Horizontal"), 0, 0);      
	}    
	transform.eulerAngles.y += 1;
	
	if ((this.transform.position.x >= 10.0 && this.rigidbody.velocity.x >= 0) || (this.transform.position.x <= -10.0 && this.rigidbody.velocity.x <= 0))
	{
		this.rigidbody.velocity = Vector3(0,0,0);
	}*/
}