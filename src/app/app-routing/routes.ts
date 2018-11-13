import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashComponent } from '../dash/dash.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { DocumentationComponent } from '../documentation/documentation.component';
import { MyBarChartComponent } from '../my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from '../my-doughnut-chart/my-doughnut-chart.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
   // Dashboard routes
   {
    path: 'dash/doughnut-chart',
    component: MyDoughnutChartComponent
   },
  {
    path: 'dash/bar-chart',
    component: MyBarChartComponent
  },
  {
    path: 'dash',
    component: DashComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'docs',
    component: DocumentationComponent
  }
];
