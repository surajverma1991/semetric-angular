import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // header = {
  //   headline: String,
  //   headdesc: 'Abhi is a free landing page template you can use for your projects. It is free to use for',
  //   headbtn:'Do Some Action',
  //   headlink:'/home'
  // }

  header:any;

  constructor(private config: ConfigService) { 
    this.header = config.getConfig().header;
  }

  ngOnInit(): void {
    this.getHeader();
  }
  getHeader(){
    return this.config.getConfig().header;
  }
}
