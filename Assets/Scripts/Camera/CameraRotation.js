#pragma strict
var target : GameObject;
var rotationSpeed : int = 50;

function Start () {

}

function Update () {
	if(Input.GetMouseButton(1)) {
		transform.LookAt(target.transform.position);
		var rotation = Vector3( Input.GetAxisRaw( "Mouse X" ), -Input.GetAxisRaw( "Mouse Y" ), 0 );
		transform.Translate( rotation * Time.deltaTime * rotationSpeed );
	}
	
	//Debug.Log(Vector3.Distance(target.transform.position, this.transform.position));
}