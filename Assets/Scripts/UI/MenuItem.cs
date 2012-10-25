using UnityEngine;
using System.Collections;
using System.IO;

public class MenuItem : MonoBehaviour {
	public string text = "";
	public string left = "0";
	public string top = "0";
	public string width = "0";
	public string height = "0";
	public DefaultMenuAction action;
	private int leftI, topI, widthI, heightI;
	public enum MenuItemType{
		Button,
		Box,
		Label,
		HorizontalSlider,
		VerticalSlider
	};
	public MenuItemType type = MenuItemType.Button;
	public float sliderMin = 0;
	public float sliderMax = 100;
	public string sliderGameValue = "";
	
	/*public MenuItem() {
		text = "";
	}
	
	public MenuItem(string text) {
		this.text = text;
	}*/

	// Use this for initialization
	void Start () {
		leftI = Evaluate(left);
		topI = Evaluate(top);
		widthI = Evaluate(width);
		heightI = Evaluate(height);
	}
	
	// Evaluate mathematical expressions and Screen.width and Screen.height for left, top, width, height
	public static int Evaluate(string expression)
	{
		expression = expression.Replace("Screen.width", Screen.width.ToString());
		expression = expression.Replace("Screen.height", Screen.height.ToString());
		return (int)(double)new System.Xml.XPath.XPathDocument
		(new StringReader("<r/>")).CreateNavigator().Evaluate
		(string.Format("number({0})", new
		System.Text.RegularExpressions.Regex(@"([\+\-\*])")
		.Replace(expression, " ${1} ")
		.Replace("/", " div ")
		.Replace("%", " mod ")));
	}
	// alternate way of doing this - needs System.Data, which doesn't seem to hold up too well when changing scenes
	/*public static int Evaluate(string expression)
    {  
		expression = expression.Replace("Screen.width", Screen.width.ToString());
		expression = expression.Replace("Screen.height", Screen.height.ToString());
		System.Data.DataTable table = new System.Data.DataTable();
		System.Data.DataRow row = table.NewRow();
		try{
			table.Columns.Add("expression", string.Empty.GetType(), expression);
			table.Rows.Add(row);
		}
		catch(EvaluateException e){
			Debug.Log(e);
			return 0;
		}
		return int.Parse((string)row["expression"]);
    } */
	
	// Update is called once per frame
	void Update () {
	
	}
	
	/*
	// Getters for ints that shouldn't be exposed to Unity inspector
	*/
	public int getLeftI(){
		return leftI;
	}
	
	public int getTopI(){
		return topI;
	}
	
	public int getWidthI(){
		return widthI;
	}

	public int getHeightI(){
		return heightI;
	}
}