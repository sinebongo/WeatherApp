import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Output()
  searchedValue : EventEmitter<string> = new EventEmitter<string>();

  searchVal : string =''

  ngOnInit(): void {
  }

  searchMethod(){
    this.searchedValue.emit(this.searchVal)
  }
}
