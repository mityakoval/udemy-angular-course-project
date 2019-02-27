import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentPage: string;
  
  onMenuItemClicked(selectedMenuItem: string) {
    console.log('Switching to ' + selectedMenuItem);
    this.currentPage = selectedMenuItem;
  }
}
