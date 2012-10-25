#pragma strict

private var tower : Tower;
private var resources : int;

function Player(newTower : Tower, r : int) {
    this.tower = newTower;
    this.resources = r;
}

function GetTower() : Tower {
    return this.tower;
}

function GetResources() : int {
    return this.resources;
}

function Build(material : SectionMaterial, weapon : SectionWeapon) {
    var cost : int = this.tower.AddSection(material, weapon);
    this.resources -= cost;
}        

function Repair(sectionIndex : int) {
    var cost : int = this.tower.RepairSection(sectionIndex);
    this.resources -= cost;
}

function Retrofit(index : int, newMaterial : SectionMaterial, newWeapon : SectionWeapon) {
    var cost : int = this.tower.RetrofitSection(index, newMaterial, newWeapon);
}

function TakeDamage(sectionIndex : int, damage : int) {
    this.tower.DamageSection(sectionIndex, damage);
}
