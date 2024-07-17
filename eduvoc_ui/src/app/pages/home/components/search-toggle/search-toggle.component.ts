import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-toggle',
  templateUrl: './search-toggle.component.html',
  styleUrl: './search-toggle.component.scss'
})
export class SearchToggleComponent {
  isSearchActive : boolean = false;
  @Output() searchActiveChange = new EventEmitter<boolean>();

  toggleSearch(){
    this.isSearchActive = !this.isSearchActive;
    this.searchActiveChange.emit(this.isSearchActive);
  }

}
