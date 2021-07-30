import { Component, OnInit } from '@angular/core';
import { ShipserviceService } from '../shipservice.service';
import { Ship } from '../model/ship';
import { ship3 } from '../model/ship3';

@Component({
  selector: 'app-resship',
  templateUrl: './resship.component.html',
  styleUrls: ['./resship.component.css']
})
export class ResshipComponent implements OnInit {

  r=new ship3();
  mserve:ShipserviceService
  constructor(mserve:ShipserviceService) {
    this.mserve=mserve;
   }

  ngOnInit() {
  }
  func(r1)
{
  alert("Reserving ticket Please wait");
  this.r.name=r1.name;
  this.r.age=r1.age;
  this.r.Date=r1.Date;
  this.r.time=r1.time;
  this.r.src=r1.src;
  this.r.dst=r1.dst;
  this.mserve.insertresData(r1);
  document.getElementById("a").innerHTML=("Reserve ticket for "+r1.name+" Succefull!!!");
}

}
