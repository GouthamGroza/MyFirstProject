import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a Test','http://graphics8.nytimes.com/images/2014/02/12/dining/12JPCHILI2/12JPCHILI2-superJumbo.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
