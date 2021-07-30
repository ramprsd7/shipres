import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-openwindow',
  templateUrl: './openwindow.component.html',
  styleUrls: ['./openwindow.component.css']
})
export class OpenwindowComponent implements OnInit {

  route:Router;
  constructor(route:Router) {
  this.route=route;
 
}
  ngOnInit() {
  }

  validation(d)
  {
    if((d.u1==true)&&(d.user=="admin01")&&(d.pass=='admin123'))
    {
    
      this.route.navigate(['/addship']);
    }
    else if((d.u1==true)&&(d.user=="admin02")&&(d.pass=='admin123'))
    {
      this.route.navigate(['/delship']);
    }
    else if((d.u1==true)&&(d.user=="admin03")&&(d.pass=='admin1233'))
    {
      this.route.navigate(['/viewship']);
    }
     else if((d.u1==true)&&(d.user=="admin04")&&(d.pass=='admin123'))
     {
      this.route.navigate(['/modifyship']);
     }
    else if((d.u1==true)&&(d.user=="admin05")&&(d.pass=='admin123'))
    {
      this.route.navigate(['/addroute']);
    }
    else if((d.u1==true)&&(d.user=="admin06")&&(d.pass=='admin123'))
    {
      this.route.navigate(['/delroute']);
    }
    else if((d.u1==true)&&(d.user=="admin07")&&(d.pass=='admin123'))
    {
      this.route.navigate(['/viewroute']);
    }
    else if((d.u1==true)&&(d.user=="admin08")&&(d.pass=='admin123'))
    {
      this.route.navigate(['/modifyroute']);
    }

    //User Log in validation
    else if((d.u2==true)&&(d.user=="user01")&&(d.pass=='user1231'))
    {
      alert("New User can register")
      //document.getElementById("ab").innerHTML=("Welcome "+d.user+" and Password is "+d.pass)
      this.route.navigate(['/usersignup']);
    }
    else if((d.u2==true)&&(d.user=="user02")&&(d.pass=='user1232'))
    {
      alert("User verified for schedule details")
      this.route.navigate(['/sched']);
    }
    else if((d.u2==true)&&(d.user=="user03")&&(d.pass=='user1233'))
    {
      alert("User verified for Scheduling ")
      //document.getElementById("ab").innerHTML=("Welcome "+d.user+" and Password is "+d.pass)
      this.route.navigate(['/res']);
    }
    else if((d.u2==true)&&(d.user=="user04")&&(d.pass=='user1234'))
    {
      alert("User verified for Modify Tickets")
      this.route.navigate(['/man']);
    }





    else if((d.u2==false)||(d.u2==true))
    {
      this.route.navigate(['/signup']);
    }
    else
    {
      document.getElementById("ab").innerHTML=("Invalid Input");
 
    }
}
// signup()
// {
//   this.route.navigate(['/signup']);
// }

}
