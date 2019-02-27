import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../_models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe(
      'Recipe #1',
      'This is the first recipe',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1'
    ),
    new Recipe(
      'Recipe #2',
      'This is the second recipe',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg'
    )
  ];
  @Output() recipeItemClicked = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }
  
  onRecipeItemClicked(recipe: Recipe) {
    console.log('[ RecipeListComponent ] onRecipeItemClicked() fired');
    this.recipeItemClicked.emit(recipe);
  }
}
