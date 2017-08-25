import { Component, OnInit } from '@angular/core';
import { Unit } from '../unit';
import { UnitService } from '../unit.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UnitService]
})
export class AdminComponent implements OnInit {

  constructor(private unitService: UnitService) { }

  ngOnInit() {
  }

  submitForm(name: string, 
    mineral: number, 
    vespene: number, 
    supply: number, 
    buildTime: number, 
    buildFrom: string, 
    life: number, 
    energy: number, 
    armor: number, 
    desc: string) {
    var newUnit: Unit = new Unit(name,  
      mineral, 
      vespene,
      supply,
      buildTime,
      buildFrom,
      life,
      energy,
      armor,
      desc);
    this.unitService.addUnit(newUnit);
  }
}

// name,  
// mineral, 
// vespene,
// supply,
// buildTime,
// buildFrom, 
// life,
// energy,
// armor,
// desc