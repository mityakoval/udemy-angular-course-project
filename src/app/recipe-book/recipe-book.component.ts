import { Component } from '@angular/core';

import { Recipe } from '../_models/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent {
  currentRecipe: Recipe;
  
  onRecipeItemClicked(recipe: Recipe) {
    this.currentRecipe = recipe;
  }
}