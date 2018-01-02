import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimaryComponent } from './pages/primary.component';
import { NavigatorComponent } from './controls/navigator.component';
import { HeaderComponent } from './controls/header.component';
import { ResumeComponent } from './pages/resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollSpyModule, ScrollSpyService } from 'ngx-scrollspy';
import { GameComponent } from './pages/game.component';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';


@NgModule({
  declarations: [
    AppComponent,
    PrimaryComponent,
    NavigatorComponent,
    HeaderComponent,
    ResumeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
