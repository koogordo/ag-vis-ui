import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
import { CookieService } from 'ngx-cookie-service';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // login form control center
  private authenticated = true;
  private user;
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
    fname: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])
    ),
    lname: new FormControl(
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
  constructor(
    private api: ApiService,
    private router: Router,
    private cookieService: CookieService,
    private authService: AuthCheckService
  ) {}

  ngOnInit() {
    if (this.cookieService.check('login')) {
      const user = JSON.parse(JSON.stringify(this.cookieService.get('login')));
      this.user = user;
      let body = new HttpParams()
        .set('username', user.email)
        .set('password', user.hash);

      this.api.checkLogin(body).subscribe(loggedIn => {
        const result = JSON.parse(JSON.stringify(loggedIn));
        if (result.validated) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      });
    } else {
      this.authenticated = false;
    }
  }

  public login() {
    if (this.loginForm.status === 'VALID') {
      let body = new HttpParams()
        .set('username', this.loginForm.value.email)
        .set('password', this.loginForm.value.password);
      this.api.login(body).subscribe(res => {
        let auth = JSON.parse(JSON.stringify(res));
        console.log(auth);
        if (auth.loggedIn) {
          this.cookieService.set('login', JSON.stringify(auth));
          this.router.navigateByUrl('/dash');
        }
      });
    } else {
      console.log({ status: 'fail', message: 'Invalid form' });
    }
  }

  public register() {
    if (this.registerForm.status === 'VALID') {
      let body = new HttpParams()
        .set('fname', this.registerForm.value.fname)
        .set('lname', this.registerForm.value.lname)
        .set('email', this.registerForm.value.email)
        .set('password', this.registerForm.value.password)
        .set('confPass', this.registerForm.value.confPass);
      // console.log(JSON.stringify(this.registerForm.value));
      // let data = JSON.stringify(this.registerForm.value);
      this.api.register(body).subscribe(res => {
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
