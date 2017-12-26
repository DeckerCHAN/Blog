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


@NgModule({
  declarations: [
    AppComponent,
    PrimaryComponent,
    NavigatorComponent,
    HeaderComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ScrollSpyModule

  ],
  providers: [ScrollSpyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
