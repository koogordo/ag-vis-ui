import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthBridgeService } from './_services/bridges/auth-bridge.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ag-vis-ui';
  private authenticated = false;
  private user;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  constructor(
    private http: HttpClient,
    private router: Router,
    private authSwitch: AuthBridgeService
  ) {}

  ngOnInit() {
    this.authSwitch.switch.subscribe(state => {
      this.authenticated = state;
    });
  }
}
