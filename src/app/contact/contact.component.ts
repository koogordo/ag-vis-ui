import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
declare function emailer(a, b, c, d): any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public name = '';
  public email = '';
  public subject = '';
  public message = '';
  private successMessage = null;
  private authenticated = false;
  private user;
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private api: ApiService
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

  public submit_button() {
    emailer(this.email, this.subject, this.name, this.message);
    this.successMessage =
      'Thank you, we will get back to you as soon as possible.';
    setTimeout(() => {
      this.successMessage = null;
    }, 3000);
  }
}
