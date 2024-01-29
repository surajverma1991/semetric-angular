import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:any;
  constructor(private config:ConfigService) {
    this.clients = config.getConfig().clients;
   }

  ngOnInit(): void {
  }

}
