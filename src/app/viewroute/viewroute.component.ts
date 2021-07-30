import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewroute',
  templateUrl: './viewroute.component.html',
  styleUrls: ['./viewroute.component.css']
})
export class ViewrouteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
view()
{
  alert("View route Working ")
}
}
