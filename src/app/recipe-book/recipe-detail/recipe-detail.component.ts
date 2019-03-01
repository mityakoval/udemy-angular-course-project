import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../_models/recipe.model';

import { ShoppingListService } from '../../_services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }
  
  addIngredientsToShoppingList() {
    this.slService.addMultipleIngredients(this.recipe.ingredients);
  }
}
