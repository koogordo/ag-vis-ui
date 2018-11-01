import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//bootstrap
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
    HelpComponent
  ],
  imports: [BrowserModule, FlexLayoutModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
