import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  Pricing:any;
  
  constructor(private config:ConfigService) { 
    this.Pricing=config.getConfig().pricing;
  }

  ngOnInit(): void {
  }

}
