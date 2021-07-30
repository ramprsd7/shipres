import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  route:Router
  constructor(route:Router) {this.route=route; }

  ngOnInit() {
  }
  signup()
  {
    this.route.navigate(['/userreg']);
  }
}

