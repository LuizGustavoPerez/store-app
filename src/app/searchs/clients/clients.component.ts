import { Component, OnInit } from '@angular/core';

import { Iclients } from './iclients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {

  client: Iclients;

  constructor() { }

  ngOnInit() { }

  receiveClient(clientEvent: Iclients) {
    this.client = clientEvent;
    console.log(this.client);
    if (Object.keys(this.client).length === 0 || this.client == null){
      console.log("vazio");
    }
  }
}
