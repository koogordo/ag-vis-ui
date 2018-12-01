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
  public Username = '';
  public Useremail = '';
  public Subject = '';
  public complaint = '';
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
      this.router.navigateByUrl('');
    }
  }

  public submit_button() {
    emailer(this.Useremail, this.Subject, this.Username, this.complaint);
    alert('Email Sent');
  }
}
