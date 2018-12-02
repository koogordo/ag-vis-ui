import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { MyBarChartComponent } from '../my-bar-chart/my-bar-chart.component';
import {
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
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
  private dateAdapter = new NgbDateNativeAdapter();
  private startDateStruct: NgbDateStruct;
  private endDateStruct: NgbDateStruct;
  private requestParams = {};
  public barChart = false;
  public donutChart = false;
  public lineChart = false;
  public polarChart = false;
  private dataLoading = true;
  private chartData;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  constructor(
    private api: ApiService,
    private router: Router,
    private cookieService: CookieService
  ) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    console.log(currentYear);
    console.log(currentMonth);
    console.log(currentDay);
    this.endDateStruct = {
      year: currentYear,
      month: currentMonth,
      day: currentDay
    };
    const date = new Date();
    const prevDate = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
    const prevYear = prevDate.getFullYear();
    const prevMonth = prevDate.getMonth() + 1;
    const prevDay = prevDate.getDate();
    this.startDateStruct = {
      year: prevYear,
      month: prevMonth,
      day: prevDay
    };
  }

  ngOnInit() {
    if (this.cookieService.check('login')) {
      const user = JSON.parse(JSON.stringify(this.cookieService.get('login')));
      this.user = JSON.parse(user);
      console.log(this.user);
      console.log();
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
      this.api.getSensors(getSensorBody).subscribe(res => {
        const result = JSON.parse(JSON.stringify(res));
        if (result) {
          console.log(result);
          this.sensors = result;
          this.setChartData(this.sensors[0].type);
        } else {
          console.error("Sensor didn't load properly");
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
        this.authenticated = false;
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

  private setChartData(type) {
    this.dataLoading = true;
    const nativeStartDate = this.dateAdapter.toModel(this.startDateStruct);
    const nativeEndDate = this.dateAdapter.toModel(this.endDateStruct);
    const startDate = new Date(nativeStartDate).getTime() / 1000;
    const endDate = new Date(nativeEndDate).getTime() / 1000;
    const duration = endDate - startDate;
    const reqBody = new HttpParams()
      .set('from', `${startDate}`)
      .set('to', `${duration}`)
      .set('email', this.user.email)
      .set('site', 'Winona')
      .set('sensor', type);

    this.api.sensorOverTime(reqBody).subscribe(data => {
      const result = JSON.parse(JSON.stringify(data));
      this.chartData = result;
      this.onClickLine();
      this.dataLoading = false;
    });
  }

  private setSensorButtonText(type) {
    if (type === 'DHT11') {
      return type;
    } else if (type === 'relay') {
      return 'Relay';
    } else if (type === 'watersensor') {
      return 'Water Sensor';
    }
  }
}
