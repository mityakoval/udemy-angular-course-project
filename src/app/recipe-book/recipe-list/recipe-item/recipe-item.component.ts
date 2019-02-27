import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../../_models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeClicked = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }
  
  onRecipeItemClick() {
    this.recipeClicked.emit()
  }
}
