import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  searchedText = '';

  searchHandler() {
    console.log('Search clicked');
    this.search.emit(this.searchedText);
  }

  inputChangeHandler(event: any) {
    console.log(event.target.value);
    this.searchedText = event.target.value;
  }

  onTyping(event: any) {
    console.log(event.target.value);
  }
}
