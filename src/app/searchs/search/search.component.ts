import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Iclients } from './../clients/iclients';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  url: string = "";
  client: Iclients;
  error: string = "";
  
  @Output() clientEvent = new EventEmitter<Iclients>();

  constructor( private searchService: SearchService) { }

  ngOnInit() {
  }

  //Realiza busca de cliente ou usuario de acordo com a rota ativa
  getResult(searchTerm){
      this.searchService.getClient(searchTerm)
      .subscribe((data: Iclients) => {
        this.client = data;
        this.clientEvent.emit(this.client);
      },
      error => {
        this.error = error;
      })
  }
}
