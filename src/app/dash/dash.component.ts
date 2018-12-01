import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { MyBarChartComponent } from '../my-bar-chart/my-bar-chart.component';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  template: '<app-dash [childMessage]="parentMessage"></app-child>',
  styleUrls: ['./dash.component.css']
})

export class DashComponent implements OnInit {

  public barChart = true;
  public donutChart = false;
  public lineChart = false;
  public polarChart = false;

  constructor() { }

  ngOnInit() {

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



