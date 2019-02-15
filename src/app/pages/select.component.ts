import {Component} from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
    <div class="container-fluid">
      <div class="row">
        <h1>Textttt!</h1>
      </div>
      <div class="row">
        <input class="col-4" type="text" [disabled]="lock" ngModel="{{this.index}}">
        <div class="col-8"><button class="btn btn-lg">Confirm</button></div>
      </div>
    </div>

  `
})


export class SelectComponent {
  public lock: string;
  public index: string;

  constructor() {
    this.lock = '';
  }
}
