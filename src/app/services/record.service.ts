import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { headers, recordUrl } from '../config';


@Injectable()
export class RecordService {
  constructor(private http: HttpClient) {
  }

  public recording(navigator: any) {
    const body = {
      appCodeName: navigator.appCodeName,
      vendor: navigator.vendor,
      platform: navigator.platform,

    };

    this.http.post(recordUrl, JSON.stringify(body), {headers: headers}).subscribe(data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
