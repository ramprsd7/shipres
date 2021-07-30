import { Component, OnInit } from '@angular/core';
import { ShipserviceService } from '../shipservice.service';
import { Ship } from '../model/ship';

@Component({
  selector: 'app-delship',
  templateUrl: './delship.component.html',
  styleUrls: ['./delship.component.css']
})
export class DelshipComponent implements OnInit {
  shipserv1:ShipserviceService
  constructor(ship1:ShipserviceService) {
    this.shipserv1=ship1

   }


  ngOnInit() {
  }

  validation(d)
{
  alert("Delete ship"+d.usr)
  document.getElementById("a").innerHTML=(d.usr+" is deleted");
  this.shipserv1.deleteData1(d.usr);
}

}
