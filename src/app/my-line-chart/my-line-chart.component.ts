import { Component, OnInit, Input } from '@angular/core';
import {
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {
  public dateAdapter = new NgbDateNativeAdapter();
  private startDateStruct: NgbDateStruct;

  @Input() chartData;
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public lineChartLabels = [];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [];

  constructor() {}

  ngOnInit() {
    if (this.chartData[0].type === "DHT11") {
      this.dht11Chart();
    } else if (this.chartData[0].type === "watersensor") {
      this.watersensorChart();
    } else if (this.chartData[0].type === "relay") {
      this.relayChart();
    }
  }

  public dht11Chart() {
    const temp = [];
    const humidity = [];
    const labels = [];
    for (let i = 0; i < this.chartData.length; i++) {
         if (i % 150 === 0) {
          const value = this.chartData[i].value;
          const date = new Date(this.chartData[i].time * 1000);
          labels.push(date.getDate());
          const res = value.split(",");
          const trimmedRes = res.map((item) => {
          const half = item.replace('(', '');
          const full = half.replace(')', '');
          return full;
          });
       temp.push(trimmedRes[0]);
       humidity.push(trimmedRes[1]);
        }
      }
      console.log(temp);
      this.lineChartLabels = labels;
     this.lineChartData = [ { data: temp, label: 'Temperature' }, { data: humidity, label: 'Humidity' } ];
    console.log(this.chartData[0]);
  }

  public watersensorChart() {
    const labels = [];
    const level = [];

    for (let i = 0; i < this.chartData.length; i++) {
      if (i % 150 === 0) {
        const value = this.chartData[i].value;
        const date = new Date(this.chartData[i].time * 1000);
        labels.push(date.getDate());
        level.push(value);
      }
    }
    console.log(level);
    this.lineChartLabels = labels;
    this.lineChartData =  [ { data: level, label: 'Water Level' } ];
    console.log(this.chartData[0]);
  }

  public relayChart() {
    const labels = [];
    const relay = [];

    for (let i = 0; i < this.chartData.length; i++) {
      if (i % 150 === 0) {
        const value = this.chartData[i].value;
        const date = new Date(this.chartData[i].time * 1000);
        labels.push(date.getDate());
        relay.push(value);
      }
    }
    console.log(relay);
    this.lineChartLabels = labels;
    this.lineChartData = [ { data: relay, label: 'Relay' } ];
    console.log(this.chartData[0]);
  }

}


