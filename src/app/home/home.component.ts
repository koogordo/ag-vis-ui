import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  private registerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confPass: new FormControl()
  });
  constructor() {}

  ngOnInit() {}

  login() {
    console.log(this.loginForm);
  }
  register() {
    console.log(this.registerForm);
  }
}
