import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthTopBarComponent } from './top-bars/auth-top-bar/auth-top-bar.component';
import { NonAuthTopBarComponent } from './top-bars/non-auth-top-bar/non-auth-top-bar.component';
import { DashComponent } from './dash/dash.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, AuthTopBarComponent, NonAuthTopBarComponent, DashComponent, DocumentationComponent, ContactComponent, AboutComponent],
  imports: [BrowserModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
