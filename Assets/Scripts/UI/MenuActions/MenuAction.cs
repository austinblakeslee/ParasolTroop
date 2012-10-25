using UnityEngine;
using System.Collections;

public interface MenuAction {
	// All menu actions must implement these functions
	void Action();
}

public abstract class DefaultMenuAction:MonoBehaviour,MenuAction{
	public abstract void Action();
}
