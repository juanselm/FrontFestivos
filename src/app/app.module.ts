import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppComponent } from './app.component';
import { YearCalendarComponent } from './features/components/year-calendar/year-calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    YearCalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    YearCalendarComponent,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
