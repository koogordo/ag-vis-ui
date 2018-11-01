import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashComponent } from '../dash/dash.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { DocumentationComponent } from '../documentation/documentation.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
