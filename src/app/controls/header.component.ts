import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() backgroundImage: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() meta: string;
}
