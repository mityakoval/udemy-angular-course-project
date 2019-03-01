import { EventEmitter } from '@angular/core';

import { Ingredient } from '../_models/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Array<Ingredient> = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  
  getIngredients(): Array<Ingredient> {
    return this.ingredients.slice();
  }
  
  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }
  
  addMultipleIngredients(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
    this.ingredientsChanged.emit(this.getIngredients());
  }
}