import { Component, OnInit } from '@angular/core';

import { Recipe } from '../_models/recipe.model';

import { RecipeService } from '../_services/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  currentRecipe: Recipe;
  
  constructor(private recipeService: RecipeService) {}
  
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.currentRecipe = recipe
      }
    );
  }
  
  onRecipeItemClicked(recipe: Recipe) {
    this.currentRecipe = recipe;
  }
}