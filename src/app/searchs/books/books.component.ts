import { Ibooks } from './ibooks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {

  hasResult: boolean;
  searched: boolean;
  book: Ibooks;

  constructor() { }

  ngOnInit() {
  }

  receiveBook(bookEvent: Ibooks){
    this.book = bookEvent;
    this.searched = true;
    if (Object.keys(this.book).length === 0 || this.book == null){
      this.hasResult = false;
    }else{
      this.hasResult = true;
    }
  }
}
