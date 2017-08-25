import { Component, OnInit } from '@angular/core';

import { Unit } from '../unit';
import { Router } from '@angular/router';
import { UnitService } from '../unit.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [UnitService]
})
export class RosterComponent implements OnInit {
  // variables

  //units: FirebaseListObservable<any[]>;
  units;
  

  constructor(private router: Router, private unitService: UnitService) { }

  ngOnInit() {
    this.units = this.unitService.getUnits().subscribe(dataEmitted => {
      
      this.units = dataEmitted
    });    
  }

}
