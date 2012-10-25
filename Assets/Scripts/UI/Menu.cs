using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class Menu : MonoBehaviour {
	public List<MenuItem> menuItems = new List<MenuItem>();
	public Texture2D background;
	public bool on;
	public GameValues gameValues;
	private float placeholder = 50;
	
	/*public Menu() {
		menuItems = new List<MenuItem>();
		Texture2D background = new Texture2D(0, 0);
	}
	
	public Menu(List<MenuItem> menuItems) {
		this.menuItems = menuItems;
	}

	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	/*void Update () {
	
	}*/
	
	// draw menu components
	void OnGUI(){
		if (on){
			if (background)
				GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), background);
			foreach (MenuItem m in menuItems){
				if (m){
					switch(m.type){
						case MenuItem.MenuItemType.Button:
							if (GUI.Button(new Rect(m.getLeftI(), m.getTopI(), m.getWidthI(), m.getHeightI()), m.text)){
								if (m.action){
									m.action.Action();
								}
							}
							break;
						case MenuItem.MenuItemType.Box:
							GUI.Box(new Rect(m.getLeftI(), m.getTopI(), m.getWidthI(), m.getHeightI()), m.text);
							break;
						case MenuItem.MenuItemType.Label:
							GUI.Label(new Rect(m.getLeftI(), m.getTopI(), m.getWidthI(), m.getHeightI()), m.text);
							break;
						case MenuItem.MenuItemType.HorizontalSlider:
							if (gameValues.values is Dictionary<string, int>){
								if (gameValues.values.ContainsKey(m.sliderGameValue)){
									gameValues.values[m.sliderGameValue] = (int)GUI.HorizontalSlider(new Rect(m.getLeftI(), m.getTopI(), m.getWidthI(), m.getHeightI()),gameValues.values[m.sliderGameValue],m.sliderMin,m.sliderMax);
								}
							}
							break;
						case MenuItem.MenuItemType.VerticalSlider:
							if (gameValues.values is Dictionary<string, int>){
								if (gameValues.values.ContainsKey(m.sliderGameValue)){
									gameValues.values[m.sliderGameValue] = (int)GUI.VerticalSlider(new Rect(m.getLeftI(), m.getTopI(), m.getWidthI(), m.getHeightI()),gameValues.values[m.sliderGameValue],m.sliderMin,m.sliderMax);
								}
							}
							break;
						default:
							return;
					}
				}
			}	
		}
	}
}