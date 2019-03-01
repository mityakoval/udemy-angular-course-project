import { EventEmitter } from '@angular/core';

import { Recipe } from '../_models/recipe.model';
import { Ingredient } from '../_models/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Array<Recipe> = [
    new Recipe(
      'Pizza',
      'LCHF pizza',
      'https://cilantro.ru/wp-content/uploads/2016/10/lchf-pizza-1.jpg',
      [
        new Ingredient('Mozarella', 200),
        new Ingredient('Cream cheese', 1),
        new Ingredient('Almond flour', 90),
        new Ingredient('Egg', 1)
      ]
    ),
    new Recipe(
      'Apple pie',
      'LCHF apple pie',
      'http://lchf.ru/wp-content/uploads/2017/08/20170826_103040.jpg',
      [
        new Ingredient('Almond flour', 180),
        new Ingredient('Butter', 300),
        new Ingredient('Fiberfin', 120),
        new Ingredient('Egg', 4),
        new Ingredient('Sukrin', 100),
        new Ingredient('Apple', 2)
      ]
    )
  ];
  
  getRecipes(): Array<Recipe> {
    return this.recipes.slice();
  }
  
  addRecipe(newRecipe: Recipe): void {
    this.recipes.push(newRecipe);
  }
}