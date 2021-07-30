import { Component, OnInit } from '@angular/core';
import { ShipserviceService } from '../shipservice.service';

@Component({
  selector: 'app-delroute',
  templateUrl: './delroute.component.html',
  styleUrls: ['./delroute.component.css']
})
export class DelrouteComponent implements OnInit {

  mserv:ShipserviceService;
  constructor(mserv:ShipserviceService)
   { 
    this.mserv=mserv;
  }
  ngOnInit() {
  }
  func(d)
  {
    document.getElementById("a").innerHTML=(d.src);
    this.mserv.deleteData2(d.src);
  }
}
