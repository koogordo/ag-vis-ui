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
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl('', Validators.required)
  });
  private registerForm = new FormGroup({
    firstName: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])
    ),
    lastName: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.min(3),
        Validators.max(100)
      ])
    ),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl('', Validators.required),
    confPass: new FormControl('', Validators.required)
  });
  constructor() {}

  ngOnInit() {}

  public login() {
    /*
     * TODO
     * validate form
     * call backend to log user in
     * get login result and act accordingly
     */
    console.log(this.loginForm.controls.email.errors);
    console.log(this.loginForm.controls.password.errors);
  }
  public register() {
    /*
     * TODO
     * validate form
     * call backend to register user
     * get register result and act accordingly
     */
    console.log(this.registerForm.controls.firstName.errors);
  }

  private setErrorMessage(errors) {
    if (errors.required) {
      return 'This field cannot be blank.';
    }
    if (errors.email) {
      return 'Must have a valid email address.';
    }
    if (errors.minlength) {
      return `Name must be at least ${
        errors.minlength.requiredLength
      } characters.`;
    }
    if (errors.maxlength) {
      return `Name can only have a maximum of ${
        errors.maxlength.requiredLength
      } characters.`;
    }
  }
}
