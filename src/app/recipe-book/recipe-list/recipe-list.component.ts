import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../_models/recipe.model';

import { RecipeService } from '../../_services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe>;

  constructor(private recipeService: RecipeService ) {
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnInit() {
  }
}
