import { Component, Input, OnInit } from '@angular/core';

import { UnitService } from '../unit.service';


@Component({
  selector: 'app-unit-list-item',
  templateUrl: './unit-list-item.component.html',
  styleUrls: ['./unit-list-item.component.css'],
  providers: [UnitService]
})
export class UnitListItemComponent implements OnInit {

  @Input() unit;

  constructor(private unitService: UnitService) { }

  ngOnInit() {
  }

  unitclass() {
    return this.unit.name.replace(/\s/g,"_");
  }
}
