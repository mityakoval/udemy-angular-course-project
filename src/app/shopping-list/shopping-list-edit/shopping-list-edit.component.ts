import { Component, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../_models/ingredient.model';

import { ShoppingListService } from '../../_services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  
  constructor(private shoppingListService: ShoppingListService) {}
  
  addItem() {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    )
  }
}