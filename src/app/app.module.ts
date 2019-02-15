import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavigatorComponent} from './controls/navigator.component';
import {HeaderComponent} from './controls/header.component';
import {ResumeComponent} from './pages/resume.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Angulartics2Module} from 'angulartics2';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {HttpClientModule} from '@angular/common/http';
import {AntiCheatingComponent} from './pages/anti-cheating.component';
import {AntiCheatingService} from './services/anti-cheating.service';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';
import {SelectComponent} from './pages/select.component';


@NgModule({
  declarations: [
    AppComponent,
    AntiCheatingComponent,
    NavigatorComponent,
    HeaderComponent,
    ResumeComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),

  ],
  providers: [AntiCheatingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
