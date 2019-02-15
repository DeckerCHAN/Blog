import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { baseUrl, headers } from '../config';
import { SelectStatus } from '../model/SelectStatus';

@Component({
  selector: 'app-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container-fluid">
      <div class="row">
        <h1>I am player {{this.playerIndex}}!</h1>
      </div>
      <div class="row">
        <input class="col-4" type="text" [disabled]="this.lock ? '' : null" [(ngModel)]="playerIndex">
        <div class="col-4">
          <button class="btn btn-lg" (click)="this.confirmIndex()">Confirm</button>
        </div>
        <div class="col-4">
          <button class="btn btn-lg" (click)="this.resetNew()">Reset</button>
        </div>
      </div>

      <div class="row">
        <div class="col-2">{{this.latestStatus.endGame}} </div>
      </div>

      <div *ngFor="let item of this.latestStatus.price; let i = index; trackBy: customTB" class="row">
        <h3 class="col-1">Room{{i + 1}}:</h3>
        <button class="btn col-2 m-2" (click)="this.pick(i)">{{item}}</button>
      </div>

      <div *ngFor="let item of this.latestStatus.selection; let i = index;  trackBy: customTB" class="row">
        <h3 class="col-3">Player{{i + 1}} : room {{item != null ? item + 1 : null}}</h3>
      </div>
    </div>

  `
})


export class SelectComponent implements OnInit, OnDestroy {
  public lock: boolean;
  public playerIndex: string;
  private pollingData: Subscription;
  public latestStatus: SelectStatus;

  constructor(private http: HttpClient, private ref: ChangeDetectorRef) {
    this.lock = false;
  }

  public confirmIndex(): any {
    this.lock = true;
  }

  public resetNew(): any {
    const f = new FormData();
    f.append('amount', '800');
    f.append('playerCount', '3');
    this.http.post(baseUrl + 'healthcheck/reset', f, {headers: headers})
      .subscribe(resp => console.log(resp));
  }

  public pick(index): any {
    if (this.lock) {
      const f = new FormData();
      f.append('index', (Number(this.playerIndex) - 1).toString());
      f.append('pickIndex', index);
      this.http.post(baseUrl + 'healthcheck/submit', f, {headers: headers})
        .subscribe(resp => console.log(resp));
    }
  }


  customTB(index, item) {
    return `${index}`;
  }

  ngOnDestroy(): void {
    this.pollingData.unsubscribe();
  }

  ngOnInit(): void {
    this.pollingData = Observable.interval(1000)
      .startWith(0)
      .switchMap(() => this.http.get(baseUrl + 'healthcheck/latest', {headers: headers}))
      .subscribe((data: SelectStatus) => {
        this.latestStatus = data;
        this.ref.markForCheck();
        console.log(data); // see console you get output every 5 sec
      });

  }
}
