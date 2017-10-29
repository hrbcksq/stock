import { Candlestick } from '../../../model/candlestick.model';
import { StockService } from '../../../data/provider/stock.service';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, Input } from '@angular/core';
import { AmChart, AmChartsService } from '@amcharts/amcharts3-angular';


@Component({
  selector: 'app-serial-chart',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.css']
})
export class SerialComponent implements AfterViewInit, OnDestroy {
  private chart: AmChart;
  private data: Array<Candlestick[]>;

  // @Input() set data(input: Array<any>) {

  // };
  @ViewChild('chartContainer') container: ElementRef

  constructor(
    private readonly amChartsService: AmChartsService,
    private readonly stockService: StockService) {
      console.log('event');
     }


  ngAfterViewInit(): void {
    // for (let index = 0; index < 360; index++) {
    //   data.push({
    //     index: index,
    //     value: Math.cos(index / 180 * Math.PI * 3),
    //     prediction: Math.sin(index / 180 * Math.PI * 3) + Math.cos(index / 180 * Math.PI * 3) * Math.pow(index, 0.3)
    //   })
    // }

    this.stockService.onCandles().subscribe((data: Candlestick[]) => {
      this.amChartsService.updateChart(this.chart, () => {
        // Change whatever properties you want
        data.forEach(x => x.T = new Date(x.T));
        this.chart.dataProvider = data.slice(data.length - 100, data.length);
        //
      });
    })
    this.chart = this.amChartsService.makeChart(this.container.nativeElement.id, {
      'type': 'serial',
      'theme': 'light',
      'marginRight': 40,
      'marginLeft': 40,
      'autoMarginOffset': 20,
      'mouseWheelZoomEnabled': false,
      // 'dataDateFormat': 'YYYY-MM-DD',
      'valueAxes': [{
        'id': 'v1',
        'axisAlpha': 0,
        'position': 'left',
        // 'ignoreAxisWidth': false
      }, {
        'id': 'v2',
        'axisAlpha': 0,
        'position': 'left',
        // 'ignoreAxisWidth': false
      }],
      'balloon': {
        'borderThickness': 1,
        'shadowAlpha': 0
      },
      'graphs': [{
        'id': 'g1',
        'proCandlesticks': true,
        'closeField': 'C',
        'openField': 'O',
        'lowField': 'L',
        'highField': 'H',
        'type': 'candlestick',
        'valueField': 'C',
        'negativeFillColors': '#db4c3c',
        'negativeLineColor': '#db4c3c',
        'fillAlphas': 0.9,
        // 'balloon': {
        //   'drop': true,
        //   'adjustBorderColor': false,
        //   'color': '#ffffff'
        // },
        // 'bullet': 'round',
        // 'bulletBorderAlpha': 1,
        // 'bulletColor': '#FFFFFF',
        // 'bulletSize': 1,
        // 'hideBulletsCount': 50,
        'lineThickness': 1,
        'title': 'red line',
        // 'useLineColorForBulletBorder': true,
        // 'valueField': 'C',
        // 'balloonText': '<span style=\'font-size:18px;\'>[[value]]</span>'
      },
      // {
      //   'id': 'g2',
      //   // 'balloon': {
      //   //   'drop': true,
      //   //   'adjustBorderColor': false,
      //   //   'color': '#ffffff'
      //   // },
      //   // 'bullet': 'round',
      //   // 'bulletBorderAlpha': 1,
      //   // 'bulletColor': '#FFFFFF',
      //   // 'bulletSize': 1,
      //   // 'hideBulletsCount': 50,
      //   'lineThickness': 1,
      //   'title': 'yellow',
      //   // 'useLineColorForBulletBorder': true,
      //   'valueField': 'O',
      //   // 'balloonText': '<span style=\'font-size:18px;\'>[[value]]</span>'
      // }
    ],
      // 'chartScrollbar': {
      //   'graph': 'g1',
      //   'oppositeAxis': false,
      //   'offset': 30,
      //   'scrollbarHeight': 80,
      //   'backgroundAlpha': 0,
      //   'selectedBackgroundAlpha': 0.1,
      //   'selectedBackgroundColor': '#888888',
      //   'graphFillAlpha': 0,
      //   'graphLineAlpha': 0.5,
      //   'selectedGraphFillAlpha': 0,
      //   'selectedGraphLineAlpha': 1,
      //   'autoGridCount': true,
      //   'color': '#AAAAAA'
      // },
      'chartCursor': {
        'pan': true,
        'valueLineEnabled': true,
        'valueLineBalloonEnabled': true,
        'cursorAlpha': 1,
        'cursorColor': '#258cbb',
        'limitToGraph': 'g1',
        'valueLineAlpha': 0.2,
        'valueZoomable': true
      },
      'valueScrollbar': {
        'oppositeAxis': false,
        'offset': 50,
        'scrollbarHeight': 10
      },
      'categoryField': 'T',
      'categoryAxis': {
        'dashLength': 1,
        'minorGridEnabled': true,
        // 'parseDates': true
      },
      'export': {
        'enabled': true
      },
      'legend': {
        'align': 'left',
        'equalWidths': false,
        'valueAlign': 'left',
        'valueWidth': 0
      },
      'dataProvider': []
    })
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.amChartsService.destroyChart(this.chart);
    }
  }
}
