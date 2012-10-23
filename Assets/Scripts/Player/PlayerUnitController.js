#pragma strict

private var towerPoints : GameObject[];
private var index : int = 0;

function Start () {

	//need to sort the towers from 1-6, this function puts them in a random order.
	towerPoints = GameObject.FindGameObjectsWithTag("Tower Point");
	
	this.transform.position = towerPoints[index].transform.position;
}

function Update () {
	if (Input.GetKeyDown(KeyCode.LeftArrow))
	{
		if (index <= 0)
		{
			index = (towerPoints.Length - 1);
		}
		else
		{
			index -= 1;
		}
	}
	else if (Input.GetKeyDown(KeyCode.RightArrow))
	{
		if (index >= (towerPoints.Length - 1))
		{
			index = 0;
		}
		else
		{
			index += 1;
		}
	}
	
	//Doing some of this tired. I might have some bad logic in here.
	if (Vector3.Distance(towerPoints[index].transform.position, this.transform.position) < 1 && this.transform.position != towerPoints[index].transform.position)
	{
		this.transform.position = towerPoints[index].transform.position;
	}
	else if (this.transform.position != towerPoints[index].transform.position)
	{
		this.transform.position -= (this.transform.position - towerPoints[index].transform.position) * 0.1;
	}
}