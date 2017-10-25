import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmChartsModule, AmChartsService } from '@amcharts/amcharts3-angular';
import { SerialComponent } from 'app/view/charts/serial/serial.component';

@NgModule({
  imports: [
    CommonModule,
    AmChartsModule
    // SerialModule
  ],
  declarations: [SerialComponent],
  exports: [SerialComponent],
  providers: [AmChartsService]
})
export class ChartsModule { }
