import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  constructor(private http: HttpClient) {}

  public register(body) {
    // console.log(JSON.stringify(this.registerForm.value));
    // let data = JSON.stringify(this.registerForm.value);
    return this.http.post(
      'http://plantpi.workstations.winona.edu/users/signup.php',
      body.toString(),
      this.httpOptions
    );
  }

  public login(body) {
    // return this.http.post(
    //   'http://192.168.64.2:80/login.php',
    //   body.toString(),
    //   this.httpOptions
    // );
    return this.http.post(
      'http://plantpi.workstations.winona.edu/users/validate.php',
      body.toString(),
      this.httpOptions
    );
  }

  public logout() {
    console.log('button click');
    let body = new HttpParams();
    return this.http.post(
      'http://192.168.64.2:80/logout.php',
      body.toString(),
      this.httpOptions
    );
  }

  public checkLogin(body) {
    return this.http.post(
      'http://plantpi.workstations.winona.edu/users/sessioncheck.php',
      body.toString(),
      this.httpOptions
    );
  }
}
