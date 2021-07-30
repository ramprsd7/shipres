import { Component, OnInit } from '@angular/core';
import { ShipserviceService } from '../shipservice.service';
import { Ship } from '../model/ship';

@Component({
  selector: 'app-addship',
  templateUrl: './addship.component.html',
  styleUrls: ['./addship.component.css']
})
export class AddshipComponent implements OnInit {
sh=new Ship();
  constructor(private shipserv:ShipserviceService) {

   }

  ngOnInit() {
  }

  validation(data)
  {
//alert(JSON.stringify(data))
this.sh.usr=data.usr;
this.sh.src=data.src;
this.sh.dst=data.dst;
this.sh.td=data.td;
this.sh.sc=data.sc;
this.sh.rc=data.rc; 
this.shipserv.addship(this.sh);
document.getElementById("a").innerHTML=(this.sh.usr+" is Added");
}
}
