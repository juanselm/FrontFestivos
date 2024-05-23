import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { startOfMonth, addMonths } from 'date-fns';

@Component({
  selector: 'app-year-calendar',
  templateUrl: './year-calendar.component.html',
  styleUrls: ['./year-calendar.component.css']
})
export class YearCalendarComponent implements OnInit {
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  months: { date: Date }[] = [];

  ngOnInit(): void {
    this.initializeMonths();
  }

  initializeMonths() {
    for (let i = 0; i < 12; i++) {
      this.months.push({ date: startOfMonth(addMonths(new Date(), i)) });
    }
  }
}
