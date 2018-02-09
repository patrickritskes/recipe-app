import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  onAddItem(form: NgForm) {
    console.log(form);
  }
}
