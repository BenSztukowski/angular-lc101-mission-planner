import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  beingEdited: string = null;
  equipment: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];
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
