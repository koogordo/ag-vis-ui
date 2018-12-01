import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { ApiService } from '../../_services/api.service';
@Component({
  selector: 'app-auth-top-bar',
  templateUrl: './auth-top-bar.component.html',
  styleUrls: ['./auth-top-bar.component.css']
})
export class AuthTopBarComponent implements OnInit {
  private user;
  private authenticated = false;
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit() {
    if (this.cookieService.check('login')) {
      const user = JSON.parse(JSON.stringify(this.cookieService.get('login')));
      this.user = JSON.parse(user);
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

  logout() {
    this.cookieService.delete('login');
    this.router.navigateByUrl('');
  }
}
