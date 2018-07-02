import { Component, OnInit } from '@angular/core';

import { Iclients } from './iclients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {

  client: Iclients;
  hasResult: boolean;
  searched: boolean = false;

  constructor() { }

  ngOnInit() { }

  receiveClient(clientEvent: Iclients) {
    this.client = clientEvent;
    this.searched = true;
    if (Object.keys(this.client).length === 0 || this.client == null){
      this.hasResult = false;
    }else{
      this.hasResult = true;
    }
  }
}
