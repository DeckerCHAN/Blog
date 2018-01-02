import {
  AfterViewChecked, AfterViewInit, Component, ElementRef, HostBinding, HostListener, OnInit,
  ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Utils } from '../utils';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild('canvas') canvasRef: ElementRef;
  @ViewChild('map') map: ElementRef;


  private context2d: any;

  @HostBinding('style.height.px')
  private innerHeight: number;

  @HostBinding('style.width.px')
  private innerWidth: number;


  mapWidth: number;
  mapHeight: number;

  zoomScale: number;

  viewPointOffsetX: number;
  viewPointOffsetY: number;

  sampleX: number;
  sampleY: number;
  sampleDirection: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = event.target.innerHeight;
    this.innerWidth = event.target.innerWidth;
    console.log(this.innerWidth + ',' + this.innerHeight);

  }


  ngAfterViewChecked(): void {

  }

  ngAfterViewInit(): void {


    this.context2d = this.canvasRef.nativeElement.getContext('2d');


    IntervalObservable.create(30).subscribe(n => {
      this.render();
    });

    IntervalObservable.create(10).subscribe(n => {
      this.tick();
    });
  }

  constructor() {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth + ',' + this.innerHeight);

    this.mapWidth = 1800;
    this.mapHeight = 1800;

    this.viewPointOffsetX = 0;
    this.viewPointOffsetY = 0;

    this.zoomScale = 8;

    // sample
    this.sampleX = 50;
    this.sampleY = 50;
    this.sampleDirection = 45;

  }

  tick() {

    // this.sampleX += 0.1;
    // this.sampleY += 0.1;
    this.sampleDirection += 0.1;


  }

  render() {
    this.context2d.clearRect(0, 0, this.innerWidth, this.innerHeight); // clear canvas

    this.context2d.save();

    this.context2d.scale(this.zoomScale, this.zoomScale);
    this.context2d.translate(this.viewPointOffsetX, this.viewPointOffsetY);

    this.context2d.drawImage(this.map.nativeElement, 0, 0, this.mapWidth, this.mapHeight);


    // this.drawShip(this.context2d, this.sampleX, this.sampleY, 0);


    this.context2d.restore();

  }







}
