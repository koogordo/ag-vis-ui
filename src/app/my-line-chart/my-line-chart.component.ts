import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {
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
    const temp = [];
    const humidity = [];
    const labels = [];
    for (let i = 0; i < this.chartData.length; i++) {
         if (i % 50 === 0) {
          const value = this.chartData[i].value;
          const date = new Date(this.chartData[i].time);
          labels.push(date.getMinutes());
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

}
