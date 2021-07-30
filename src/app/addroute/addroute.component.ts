import { Component, OnInit } from '@angular/core';
import { ShipserviceService } from '../shipservice.service';
import { route } from '../model/route';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.component.html',
  styleUrls: ['./addroute.component.css']
})
export class AddrouteComponent implements OnInit {
  
 

  ngOnInit() {
  }
  r=new route();
  mserve:ShipserviceService;
  constructor(mserv:ShipserviceService) {
    this.mserve=mserv;
  }
  func(d)
  {
      this.r.Source=d.src;
      this.r.Destination=d.dest;
      this.r.Distance=d.dist;
      this.r.Duration=d.dur;
      this.r.Cost=d.cst;
      this.mserve.insertData(this.r);
  }

}
