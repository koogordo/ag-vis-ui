import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  private authenticated = false;
  private user;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {}

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
}
