import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgWeatherWidgetModule } from 'ng-weather-widget';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgWeatherWidgetModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
