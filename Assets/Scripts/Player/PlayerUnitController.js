#pragma strict

private var towerPoints : GameObject[];
private var index : int = 0;
private var choose : boolean;

function Start () {

	//need to sort the towers from 1-6, this function puts them in a random order.
	towerPoints = GameObject.FindGameObjectsWithTag("Tower Point");
	choose = true;
	this.transform.position = towerPoints[index].transform.position;
}

function Update () {
if(choose) {
	print(index);
	if (Input.GetKeyDown(KeyCode.LeftArrow))
	{
		if (index <= 0)
		{
			index = (towerPoints.Length - 1);
		}
		else
		{
			index -= 1;
			if(towerPoints[index] == TurnOrder.player1Spot || towerPoints[index] == TurnOrder.player2Spot) {
				index -= 1;
			}
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
			if(towerPoints[index] == TurnOrder.player1Spot || towerPoints[index] == TurnOrder.player2Spot) {
				index += 1;
			}
		}
	}
	else if (Input.GetKeyDown(KeyCode.Space))
	{
		if(TurnOrder.play1turn == true) {
			TurnOrder.player1Spot = towerPoints[index];
			TurnOrder.play1turn = false;
			index += 1;
		}
		else if(TurnOrder.play1turn != true) {
			TurnOrder.player2Spot = towerPoints[index];
			TurnOrder.play1turn = true;
			PickMenu.showMenu = true;
			TurnOrder.turnNum++;
			choose = false;
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
else if(TurnOrder.play1turn) {
	this.transform.position = TurnOrder.player1Spot.transform.position;
}
else if(!TurnOrder.play1turn) {
	this.transform.position = TurnOrder.player2Spot.transform.position;
}
}