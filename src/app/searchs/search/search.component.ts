import { Ibooks } from './../books/ibooks';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Iclients } from './../clients/iclients';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  client: Iclients;
  book: Ibooks;
  error: string = "";
  url: string = "";

  @Output() clientEvent = new EventEmitter<Iclients>();
  @Output() bookEvent = new EventEmitter<Ibooks>();

  constructor( private searchService: SearchService, private router: Router) { }

  //set the current url to identify if its book search or client search
  ngOnInit() {
    this.url = this.router.url;
  }

  //Realiza busca de cliente ou usuario de acordo com a rota ativa
  getResult(searchTerm){
    if(this.url == "/clients"){
      this.searchService.getClient(searchTerm)
      .subscribe((data: Iclients) => {
        this.client = data;
        this.clientEvent.emit(this.client);
      },
      error => {
        this.error = error;
      })
    }
    if(this.url == "/books"){
      this.searchService.getBook(searchTerm)
      .subscribe((data: Ibooks) => {
        this.book = data;
        this.bookEvent.emit(this.book);
      },
      error => {
        this.error = error;
      })
    }
  }

  ngOnDestroy(){}
  
}
