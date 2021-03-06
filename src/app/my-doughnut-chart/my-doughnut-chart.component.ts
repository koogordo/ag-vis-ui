import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {
  @Input() chartData;
  public doughnutChartLabels = [];

  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
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
         if (i % 500 === 0) {
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
      this.doughnutChartLabels = labels;
      console.log(temp);
     this.doughnutChartData = [ { data: temp, label: 'Temperature' }, { data: humidity, label: 'Humidity' } ];
    console.log(this.chartData[0]);
  }

  public watersensorChart() {
    const labels = [];
    const level = [];

    for (let i = 0; i < this.chartData.length; i++) {
      if (i % 500 === 0) {
        const value = this.chartData[i].value;
        const date = new Date(this.chartData[i].time * 1000);
        labels.push(date.getDate());
        level.push(value);
      }
    }
    this.doughnutChartLabels = labels;
    console.log(level);
    this.doughnutChartData =  [ { data: level, label: 'Water Level' } ];
    console.log(this.chartData[0]);
  }

  public relayChart() {
    const labels = [];
    const relay = [];

    for (let i = 0; i < this.chartData.length; i++) {
      if (i % 500 === 0) {
        const value = this.chartData[i].value;
        const date = new Date(this.chartData[i].time * 1000);
        labels.push(date.getDate());
        relay.push(value);
      }
    }
    console.log(relay);
    this.doughnutChartLabels = labels;
    this.doughnutChartData = [ { data: relay, label: 'Relay' } ];
    console.log(this.chartData[0]);
  }
}
