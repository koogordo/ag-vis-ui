import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // login form control center
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  private loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  // register form control center
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
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  public login() {
    /*
     * TODO
     * validate form
     * call backend to log user in
     * get login result and act accordingly
     */
    let body = new HttpParams()
      .set('email', this.loginForm.value.email)
      .set('password', this.loginForm.value.password);
    // console.log(JSON.stringify(this.registerForm.value));
    // let data = JSON.stringify(this.registerForm.value);
    this.http
      .post(
        'http://192.168.64.2:80/login.php',
        body.toString(),
        this.httpOptions
      )
      .subscribe(res => {
        console.log(res);
      });
  }
  public register() {
    /*
     * TODO
     * validate form
     * call backend to register user
     * get register result and act accordingly
     */
    if (this.registerForm.status === 'VALID') {
      let body = new HttpParams()
        .set('firstName', this.registerForm.value.firstName)
        .set('lastName', this.registerForm.value.lastName)
        .set('email', this.registerForm.value.email)
        .set('password', this.registerForm.value.password)
        .set('confPass', this.registerForm.value.confPass);
      // console.log(JSON.stringify(this.registerForm.value));
      // let data = JSON.stringify(this.registerForm.value);
      this.http
        .post(
          'http://192.168.64.2:80/register.php',
          body.toString(),
          this.httpOptions
        )
        .subscribe(res => {
          console.log(res);
        });
      this.registerForm.reset();
    } else {
      console.log({ status: 'fail', message: 'Invalid form' });
    }
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
