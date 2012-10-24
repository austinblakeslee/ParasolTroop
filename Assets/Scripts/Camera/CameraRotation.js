#pragma strict
var target : GameObject;
var rotationSpeed : int = 50;
var scrollSpeed : double = 100.0;
function Start () {

}

function Update () {
	if(Input.GetMouseButton(1)) {
		transform.LookAt(target.transform.position);
		var rotation = Vector3( Input.GetAxisRaw( "Mouse X" ), 0, 0 );
		//deleted -Input.GetAxisRaw( "Mouse Y" )
		transform.Translate( rotation * Time.deltaTime * rotationSpeed );
	}
	
	if(Input.GetAxis("Mouse ScrollWheel")) {
		if(Input.GetAxis("Mouse ScrollWheel") > 0) { 
			transform.Translate(0,scrollSpeed * Input.GetAxis("Mouse ScrollWheel")*Time.deltaTime,0);
		} 
		else if(Input.GetAxis("Mouse ScrollWheel") < 0) { 
			transform.Translate(0,(scrollSpeed * Input.GetAxis("Mouse ScrollWheel")*Time.deltaTime),0);
		}
	}
	if(Input.GetKeyDown(KeyCode.DownArrow) || Input.GetKeyDown(KeyCode.UpArrow)) {
		if(Input.GetKeyDown(KeyCode.UpArrow)) { 
			transform.Translate(0,25,0);
		} 
		else if(Input.GetKeyDown(KeyCode.DownArrow)) { 
			transform.Translate(0,-25,0);
		} 
	}
	//Debug.Log(Vector3.Distance(target.transform.position, this.transform.position));
}