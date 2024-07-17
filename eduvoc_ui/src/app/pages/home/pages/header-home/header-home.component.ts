import { Component } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.scss'
})
export class HeaderHomeComponent {
  isSearchActive: boolean = false;

  onSearchActiveChange(event: boolean){
     this.isSearchActive = event;
     console.log(this.isSearchActive)
  }
}
