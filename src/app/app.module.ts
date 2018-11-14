import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthTopBarComponent } from './top-bars/auth-top-bar/auth-top-bar.component';
import { NonAuthTopBarComponent } from './top-bars/non-auth-top-bar/non-auth-top-bar.component';
import { DashComponent } from './dash/dash.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AccountComponent } from './account/account.component';
import { SensordiagnosticComponent } from './sensordiagnostic/sensordiagnostic.component';
import { HelpComponent } from './help/help.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthTopBarComponent,
    NonAuthTopBarComponent,
    DashComponent,
    DocumentationComponent,
    ContactComponent,
    AboutComponent,
    AccountComponent,
    SensordiagnosticComponent,
    HelpComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
