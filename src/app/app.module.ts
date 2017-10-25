import { ChartsModule } from './view/charts/charts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmChartsModule } from '@amcharts/amcharts3-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AmChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
