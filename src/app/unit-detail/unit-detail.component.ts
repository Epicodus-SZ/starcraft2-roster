import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Unit } from '../unit';
import { UnitService } from '../unit.service';


@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css'],
  providers: [UnitService]
})
export class UnitDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private unitService: UnitService,) { }
  unitId: string;
  unit;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.unitId = urlParameters['id'];
    });

    this.unitService.getUnitById(this.unitId).subscribe(emitData => {
     this.unit = new Unit(emitData.name,
      emitData.mineral,
      emitData.vespene,
      emitData.supply,
      emitData.buildTime,
      emitData.buildFrom,
      emitData.life,
      emitData.energy, 
      emitData.armor,
      emitData.desc);
     console.log(this.unit);
     });
  }

}
