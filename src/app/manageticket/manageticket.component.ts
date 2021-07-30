import { Component, OnInit } from '@angular/core';
import { ShipserviceService } from '../shipservice.service';

@Component({
  selector: 'app-manageticket',
  templateUrl: './manageticket.component.html',
  styleUrls: ['./manageticket.component.css']
})
export class ManageticketComponent implements OnInit {

  mserv:ShipserviceService;
  constructor(mserv:ShipserviceService)
  {
    this.mserv=mserv;
  }

  ngOnInit() {
  }
  func(data)
  {
    alert("Cancellling the Reservation Please wait");
    // document.getElementById("a").innerHTML=(data.user);
   this.mserv.insertData(data.user);
 }
}
