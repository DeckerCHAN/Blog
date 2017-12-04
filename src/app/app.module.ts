import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimaryComponent } from './pages/primary.component';
import { NavigatorComponent } from './controls/navigator.component';
import { HeaderComponent } from './controls/header.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimaryComponent,
    NavigatorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
