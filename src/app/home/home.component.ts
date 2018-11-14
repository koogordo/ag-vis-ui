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
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  private registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confPass: new FormControl('', Validators.required)
  });
  constructor() {}

  ngOnInit() {}

  login() {
    /*
     * TODO
     * validate form
     * call backend to log user in
     * get login result and act accordingly
     */
    console.log(this.loginForm);
  }
  register() {
    /*
     * TODO
     * validate form
     * call backend to register user
     * get register result and act accordingly
     */
    console.log(this.registerForm);
  }
}
