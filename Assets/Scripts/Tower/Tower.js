#pragma strict
import System.Collections.Generic;

class Tower extends MonoBehaviour {
    private var sections : List.<Section>;

    function Tower() {
        sections = new List.<Section>();
    }

    function GetSections() {
        return this.sections;
    }

    function GetSection(index : int) : Section {
        var s : Section = this.sections[index];
        return s;
    }

    function AddSection(m : SectionMaterial, w : SectionWeapon) : int {
        var s : Section = new Section(m, w);
        this.sections.Add(s);
        return s.GetCost();
    }

    function RepairSection(i : int) : int {
        var s : Section = GetSection(i);
        s.Repair();
        return s.GetCostPerRepair();
    }

    function RetrofitSection(i : int, m : SectionMaterial, w : SectionWeapon) : int {
        var s : Section = GetSection(i);
        var cost : int = 0;
        if(s.GetMaterial().GetType() != m.GetType()) {
            cost += m.GetCost() + 100;
            s.ChangeMaterial(m);
        }
        if(s.GetWeapon().GetType() != s.GetType()) {
            cost += w.GetCost() + 100;
            s.ChangeWeapon(w);
        }
        return cost;
    }

    function DamageSection(i : int, damage : int) {
        GetSection(i).SubtractSP(damage);
    }

    function GetTotalWeight() : int {
        return SumWeight(0, 0);
    }

    function CalcWeightAboveSection(index : int) : int {
        return SumWeight(index+1, 0);
    }

    function SumWeight(index : int, weight : int) : int {
        var section : Section = sections[index];
        if(index >= sections.Count) {
            return weight + section.GetWeight();
        } else {
            return weight + SumWeight(index + 1, weight);
        }
    }
}
