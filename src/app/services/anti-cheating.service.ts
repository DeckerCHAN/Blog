import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {headers, antiCheatingUrl} from '../config';
import {Observable} from 'rxjs/Observable';
import {LineChartResult} from '../entity/LineChartResult';
import {of} from 'rxjs/observable/of';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class AntiCheatingService {
  constructor(private http: HttpClient) {
    this.hitChartSubject = new Subject<Array<LineChartResult>>();
    this.hitChartObservable = this.hitChartSubject.asObservable();
  }

  private hitChartSubject: Subject<Array<LineChartResult>>;

  public hitChartObservable: Observable<Array<LineChartResult>>;

  public send(fileItem: File) {

    const data = new FormData();

    data.append('file', fileItem);

    this.http.post(antiCheatingUrl, data, {headers: headers}).subscribe((resp: Array<LineChartResult>) => {
        this.hitChartSubject.next(resp);
      },
      error => {
        console.log(error);
      });
  }
}
