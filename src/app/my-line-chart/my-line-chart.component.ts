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
    responsive: true
  };

  public lineChartLabels = ['2006', '2007', '2008', '2009'];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    { data: [65, 59, 80, 97], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor() {}

  ngOnInit() {}
}
