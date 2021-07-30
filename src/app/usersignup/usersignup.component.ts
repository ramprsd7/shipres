import { Component, OnInit } from '@angular/core';
import { ShipserviceService } from '../shipservice.service';

import { user } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  u=new user();
    mserv:ShipserviceService
    constructor(mserv:ShipserviceService)
    {
      this.mserv=mserv;
    }

  ngOnInit() {
  }
  route:Router
  validation(data)
    {
      alert("Please wait till Signed Up")
      this.u.user=data.user;
      this.u.Fname=data.Fname;
      this.u.DOB=data.DOB;
      this.u.Gender=data.Gender
      this.u.addr=data.addr;
      this.u.Paddr=data.Paddr;
      this.u.state=data.state;
      this.u.PinCode=data.PinCode;
      this.u.num=data.num;
      this.u.Email=data.Email;
      this.u.pass=data.pass;
      this.mserv.insertuserData(this.u);
      
    }

    loginagn()
  {
    this.route.navigate(['/loginagn']);
  }
}
