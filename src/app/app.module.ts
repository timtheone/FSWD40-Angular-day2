import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { FoodsComponent } from './components/foods/foods.component';
import { FoodService } from './services/food.service';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment, 'foodapp-firestore'),
    AngularFirestoreModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
