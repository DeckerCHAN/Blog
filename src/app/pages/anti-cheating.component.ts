import {Component, OnInit} from '@angular/core';
import {AntiCheatingService} from '../services/anti-cheating.service';
import {GoogleChartInterface} from 'ng2-google-charts/google-charts-interfaces';
import {Observable} from 'rxjs/Observable';
import {filter, map} from 'rxjs/operators';
import {LineChartResult} from '../entity/LineChartResult';


@Component({
  selector: 'app-anti-cheating',
  template: `
    <div class="container">


      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="inputs">
        <div class="my-auto">
          <h1 class="mb-5 text-info">Anti Cheating</h1>

          <div class="row">
            <div class="col-10">
              <input type="file" class="form-control-file" (change)="onFileChange($event)">

            </div>
            <div class="col-2">
              <button type="button" class="btn btn-primary" (click)="upload()">Upload</button>

            </div>

          </div>
          <div
            *ngFor="let item of this.chartTables?this.chartTables: []"
            class="row">
            <div class="container-fluid">
              <div class="row">
                <google-chart class="col-12" [data]="item"></google-chart>
              </div>
            </div>
          </div>


        </div>
      </section>


    </div>`,

})

export class AntiCheatingComponent implements OnInit {

  public path: File;
  public chartTables: Array<GoogleChartInterface>;

  constructor(public antiCheatService: AntiCheatingService) {
    this.converter(antiCheatService.hitChartObservable).subscribe(item => console.log(item));
  }

  onFileChange($event) {
    if ($event.target.files && $event.target.files.length > 0) {
      this.path = $event.target.files[0];
    }
  }

  upload() {
    this.antiCheatService.send(this.path);
  }


  public converter(hi: Observable<Array<LineChartResult>>): Observable<Array<GoogleChartInterface>> {
    return hi
      .pipe<Array<GoogleChartInterface>>(map(o => {
        return o.map<GoogleChartInterface>(ship => {

          // const xs = Array.from(new Set(ship.series.map(point => point.x).sort((n1, n2) => n1 - n2)));
          let values: Array<Array<any>> = [[ship.legendX, ship.legendY]];
          values = values.concat(ship.series.map(serie => [serie.x, serie.y]));
          return {
            chartType: 'LineChart',
            dataTable: values,
            options: {title: ship.title}
          };
        });
      }));
  }

  ngOnInit(): void {

    this.antiCheatService.hitChartObservable
      .pipe<Array<GoogleChartInterface>>(map(o => {
        return o.map<GoogleChartInterface>(ship => {

          // const xs = Array.from(new Set(ship.series.map(point => point.x).sort((n1, n2) => n1 - n2)));
          let values: Array<Array<any>> = [[ship.legendX, ship.legendY]];
          values = values.concat(ship.series.map(serie => [serie.x, serie.y]));
          return {
            chartType: 'LineChart',
            dataTable: values,
            options: {title: ship.title}
          };
        });
      })).subscribe(value => {
      this.chartTables = value;
    });
  }


}
