import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthCheckService {
  constructor(private api: ApiService, private cookieService: CookieService) {
    //this.api.checkLogin().then(() => {});
  }

  public authenticate() {
    if (this.cookieService.check('login')) {
      const user = JSON.parse(JSON.stringify(this.cookieService.get('login')));
      let body = new HttpParams()
        .set('username', user.email)
        .set('password', user.hash);
      return this.api.checkLogin(body);
    }
  }
}
