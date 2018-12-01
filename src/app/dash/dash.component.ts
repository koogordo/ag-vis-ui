import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { MyBarChartComponent } from '../my-bar-chart/my-bar-chart.component';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  private authenticated = false;
  private user;
  private sensorOverTime;
  private sensors;
  public barChart = true;
  public donutChart = false;
  public lineChart = false;
  public polarChart = false;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  constructor(
    private api: ApiService,
    private router: Router,
    private cookieService: CookieService
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
          this.router.navigateByUrl('');
        }
      });
      const getSensorBody = new HttpParams().set('email', this.user.email);
      console.log(getSensorBody);
      this.api.getSensors(getSensorBody).subscribe(res => {
        const result = JSON.parse(JSON.stringify(res));
        if (result) {
          console.log(result);
        } else {
          console.log('response failure');
        }
      });
    } else {
      this.authenticated = false;
      this.router.navigateByUrl('');
    }
  }

  logout() {
    console.log('button click');
    let body = new HttpParams();
    this.api.logout().subscribe(res => {
      let resStatus = JSON.parse(JSON.stringify(res));
      if (resStatus.status === 'success') {
        console.log(resStatus);
        this.router.navigateByUrl('/');
      }
    });
  }

  public onClickBar() {
    this.barChart = true;
    this.donutChart = false;
    this.lineChart = false;
    this.polarChart = false;
  }

  public onClickDonut() {
    this.donutChart = true;
    this.barChart = false;
    this.lineChart = false;
    this.polarChart = false;
  }

  public onClickLine() {
    this.lineChart = true;
    this.barChart = false;
    this.donutChart = false;
    this.polarChart = false;
  }

  public onClickPolar() {
    this.lineChart = false;
    this.barChart = false;
    this.donutChart = false;
    this.polarChart = true;
  }
}
