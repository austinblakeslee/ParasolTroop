#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(hit : Collision) {
	if(hit.gameObject.tag == "Enemy Block" || hit.gameObject.tag == "Player Block") {
		Debug.Log("Hit an enemy");
		hit.gameObject.GetComponent(Health).Ouch();
		
		//if (hit.gameObject.GetComponent(Health).getHealth() <= 0);
		//{
		//	Destroy(hit.gameObject);
		//}
	}
	
	Debug.Log("Destroying self");
	Destroy(gameObject);
}