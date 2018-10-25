import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Services
import { VisService } from './vis/vis.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [VisService],
  bootstrap: [AppComponent]
})
export class AppModule {}
