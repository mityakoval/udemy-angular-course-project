import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuItemClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.menuItemClicked.emit('recipes');
  }

  onMenuItemClick(item: string) {
    this.menuItemClicked.emit(item);
  }
}
