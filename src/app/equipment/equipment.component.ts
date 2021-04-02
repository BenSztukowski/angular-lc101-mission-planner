import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  beingEdited: string = null;
  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  constructor() { }

  ngOnInit() {
  }

  add(equip: string) {
    let contains = false;
    for(let i = 0; i < this.equipment.length; i++){
      if(this.equipment[i].toLowerCase() === equip.toLowerCase()){
        contains = true;
      }
    }
    if(!contains){
      this.equipment.push(equip);
    }
  }

  remove(equip: string) {
    let index = this.equipment.indexOf(equip);
    this.equipment.splice(index, 1);
  }

  edit(equip: string) {
    this.beingEdited = equip;
  }

  save(equip: string, index: number) {
    this.equipment[index] = equip;
    this.beingEdited = null;
  }

}
