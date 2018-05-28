import { Food } from './../../models/food.model';
import { FoodService } from './../../services/food.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  foods: Food[];
  foodItem: Food;
  moreState: boolean = false;
  

  constructor(private FoodService: FoodService) { }

  ngOnInit() {
    this.FoodService.getFoods().subscribe(foods => {
      this.foods = foods;
    })
  }

  changeState(event, food: Food){
    this.moreState = true;
    this.foodItem = food;
  }

}
