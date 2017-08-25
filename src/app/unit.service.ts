import { Injectable } from '@angular/core';
import { Unit } from './unit';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class UnitService {

  units: FirebaseListObservable<any[]>;
  
    constructor(private database: AngularFireDatabase) {
      this.units = database.list('units');
    }
  
    getUnits() {
      return this.units;
    }
  
    addUnit(newUnit: Unit) {
      this.units.push(newUnit);
    }
  
    updateUnit(localUpdatedUnit: Unit, unitKey: string){
      var unitEntryInFirebase = this.getUnitById(unitKey);
      unitEntryInFirebase.update({name: localUpdatedUnit.name,
        mineral: localUpdatedUnit.mineral,
        vespene: localUpdatedUnit.vespene,
        supply: localUpdatedUnit.supply,
        buildTime: localUpdatedUnit.buildTime,
        buildFrom: localUpdatedUnit.buildFrom,
        life: localUpdatedUnit.life,
        energy: localUpdatedUnit.energy,
        armor: localUpdatedUnit.armor,
        desc: localUpdatedUnit.desc
      });
    }
  
    deleteUnit(unitKey){
      var unitEntryInFirebase = this.getUnitById(unitKey);
      unitEntryInFirebase.remove();
    }
  
    getUnitById(unitId: string) {
      return this.database.object('units/' + unitId);

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