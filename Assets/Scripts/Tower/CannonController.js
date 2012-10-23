#pragma strict
var cb : GameObject;
var targets : GameObject[];
var fireForce : float = 150;

function Start () {

}

function Update () {
	if (Input.GetKeyDown(KeyCode.LeftControl)) {
		Fire();
	}
}

function Fire() {
	var cannonball : GameObject = Instantiate(cb, Vector3(gameObject.transform.position.x+2,gameObject.transform.position.y,gameObject.transform.position.z),Quaternion.identity);
    //cannonball.rigidbody.velocity.x= 50;
       
    while (cannonball.transform.eulerAngles.y - this.transform.eulerAngles.y > 0.1 || cannonball.transform.eulerAngles.y - this.transform.eulerAngles.y < -0.1)
    {
    	cannonball.transform.RotateAround(this.transform.position, Vector3.up, Time.deltaTime);
    }
       
    var dir = cannonball.transform.position - this.transform.position;
    dir = dir.normalized;
    print(dir);
    cannonball.rigidbody.AddForce(dir * fireForce);
    cannonball.rigidbody.velocity = (dir * fireForce);
}