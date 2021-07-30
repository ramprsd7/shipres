import { Component, OnInit } from '@angular/core';
import { Schedule } from '../model/schedule';
import { ShipserviceService } from '../shipservice.service';

@Component({
  selector: 'app-schdcom',
  templateUrl: './schdcom.component.html',
  styleUrls: ['./schdcom.component.css']
})
export class SchdcomComponent implements OnInit {

  s=new Schedule();
  mserv:ShipserviceService
  constructor(mserv:ShipserviceService)
   { 
    this.mserv=mserv;
   }

  ngOnInit() {
  }
  validation(data)

  {
    alert("schedule  Working ")
    this.s.date=data.date;
    this.s.src=data.src;
    this.s.dst=data.dst;
    this.mserv.insertData2(this.s);
    document.getElementById("a").innerHTML=("data.dst+ is Scheduled");
  }

}
