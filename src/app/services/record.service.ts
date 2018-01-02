import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecordService {
  constructor(private http: HttpClient) {
  }

  recording() {
    return null;
  }
}
