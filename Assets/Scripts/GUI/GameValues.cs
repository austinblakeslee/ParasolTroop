using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;

public class GameValues : MonoBehaviour {
	//the collection to hold all editable values
	private ArrayList allValues;

	//player editable values
	public int turnTime = 30;
	public int baseResources = 100;
	public int towerHeight = 10;
	
	// dictionary of editable values for menu inspector integration
	public Dictionary<string, int> values = new Dictionary<string, int>();

	// Use this for initialization
	void Start () {
		values.Add("turnTime", turnTime);
		values.Add("baseResources", baseResources);
		values.Add("towerHeight", towerHeight);
	
		ArrayList allValues = new ArrayList();
		allValues.Add(values["turnTime"]);
		allValues.Add(values["baseResources"]);
		allValues.Add(values["baseResources"]);
	
		Application.DontDestroyOnLoad(this.gameObject);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	
	ArrayList GetAllValues()
	{
		return allValues;
	}
}
