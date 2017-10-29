import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmChartsModule, AmChartsService } from '@amcharts/amcharts3-angular';
import { SerialComponent } from 'app/view/charts/serial/serial.component';
import { StockService } from 'app/data/provider/stock.service';

@NgModule({
  imports: [
    CommonModule,
    AmChartsModule
    // SerialModule
  ],
  declarations: [SerialComponent],
  exports: [SerialComponent],
  providers: [AmChartsService, StockService]
})
export class ChartsModule { }
