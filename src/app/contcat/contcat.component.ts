import { Component, OnInit , Input } from '@angular/core';
import { FormBuilder, FormGroup , Validator , Form , FormControl } from '@angular/forms';
// import { NgForm } from '@angular/forms';

import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-contcat',
  templateUrl: './contcat.component.html',
  styleUrls: ['./contcat.component.css']
})
export class ContcatComponent implements OnInit {
  title="Contcat Us Form";
  regform:FormGroup;
  
  log(x){
    console.log(x);
  }
  // services start
  users:any=[];
  constructor(private backdata:BackendApiService) { 
    this.backdata.GetUser().subscribe(Response=>{
      this.users=Response;
      console.log(Response)
    })
  }

  ngOnInit(): void {
  }

}