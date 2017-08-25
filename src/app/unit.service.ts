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
  
    updateUnit(localUpdatedUnit){
      var unitEntryInFirebase = this.getUnitById(localUpdatedUnit.$key);
      unitEntryInFirebase.update({title: localUpdatedUnit.title,
                                  artist: localUpdatedUnit.artist,
                                  description: localUpdatedUnit.description});
    }
  
    deleteUnit(localUnitToDelete){
      var unitEntryInFirebase = this.getUnitById(localUnitToDelete.$key);
      unitEntryInFirebase.remove();
    }
  
    getUnitById(unitId: string) {
      return this.database.object('units/' + unitId);

    }  

}
