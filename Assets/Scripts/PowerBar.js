#pragma strict

private var isDisplayed : boolean = false;
private var fill : float = 0.0;
private var hasStartedCharge : boolean = false;
private var hasFinishedCharge : boolean = false;
public var emptyTexture : Texture2D;
public var fillTexture : Texture2D;
public var fillSpeed : float;
public var power : float;

function OnGUI() {
    if(isDisplayed) {
        var width : int = emptyTexture.width;
        var height : int = emptyTexture.height;
        var emptyRect = Rect(100, 300, width, height);
        var groupRect = Rect(100, 300, width * fill, height);
        var barRect = Rect(0, 0, width, height);
        GUI.Label(Rect(100, 100, 300, 100), "Hold down Space to charge your shot, release to fire!");
        var powerWidth : float = width * fill;
        GUI.DrawTexture(emptyRect, emptyTexture);
        GUI.BeginGroup(groupRect);
        GUI.DrawTexture(barRect, fillTexture);
        GUI.EndGroup();
    }
}

function Update() {
    if(Input.GetButtonDown('Fire2')) {
        Show();
    }
    if(Input.GetButton('Jump') && isDisplayed && !hasFinishedCharge) {
        hasStartedCharge = true;
        fill += fillSpeed;
        if(fill > 1.0) {
            fill = 0.0;
        }
    } else if(hasStartedCharge) {
        hasFinishedCharge = true;
        power = fill;
    }
}

function Hide() {
    isDisplayed = false;
}

function Show() {
    isDisplayed = true;
}

function GetCharge() {
    return power;
}
