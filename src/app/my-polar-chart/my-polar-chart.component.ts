import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-polar-chart',
  templateUrl: './my-polar-chart.component.html',
  styleUrls: ['./my-polar-chart.component.css']
})
export class MyPolarChartComponent implements OnInit {

  public polarChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public polarChartLabels = ['2006', '2007', '2008', '2009'];
  public polarChartType = 'polarArea';
  public polarChartLegend = true;

  public polarChartData = [
    {data: [65, 59, 80, 97], label: 'Series A'}
];

  constructor() { }

  ngOnInit() {
  }

}
