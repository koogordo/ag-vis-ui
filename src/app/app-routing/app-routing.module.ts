import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyBarChartComponent } from '../my-bar-chart/my-bar-chart.component';
import {MyDoughnutChartComponent} from '../my-doughnut-chart/my-doughnut-chart.component';
import { routes } from './routes';



@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
