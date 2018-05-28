import { Food } from './../models/food.model';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore} from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foodsCollection: AngularFirestoreCollection<Food>;
  foods: Observable<Food[]>;
  constructor(public fsdb: AngularFirestore) { 
    // this.foods = this.fsdb.collection('foods').valueChanges();

    this.foods = this.fsdb.collection('foods').snapshotChanges().pipe(
        map(changes => {
        return changes.map( a => {
          const data = a.payload.doc.data() as Food;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    )
  }

  getFoods(){
    return this.foods;
  }
}

