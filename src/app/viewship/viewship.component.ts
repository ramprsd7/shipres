import { Component, OnInit } from '@angular/core';
import { ShipserviceService } from '../shipservice.service';
import {  Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-viewship',
  templateUrl: './viewship.component.html',
  styleUrls: ['./viewship.component.css']
})
export class ViewshipComponent implements OnInit {
  
  allships:ShipserviceService;
  constructor(db:AngularFirestore) 
  { 
    
  }

  ngOnInit() {
  }
  view()
  {
    alert("Working View of form")
    JSON.stringify(this.allships.selectAll());
  }
}
