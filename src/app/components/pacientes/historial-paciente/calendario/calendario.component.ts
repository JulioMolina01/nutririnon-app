import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent } from "igniteui-angular";

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  @ViewChild("calendar", {static: true}) public calendar: IgxCalendarComponent;

  public formatOptions: any;
  public formatViews: any;
  public locale: string;
  public select: HTMLSelectElement;

  constructor() { }

  ngOnInit() {
      this.select = document.getElementById("locations") as HTMLSelectElement;
      this.locale = this.select.value;
      this.formatOptions = { day: "2-digit", month: "long", weekday: "long", year: "numeric" };
      this.formatViews = { day: true, month: true, year: true };
  }
 
  public changeLocale(event) {
    this.locale = this.select.value;
  }

}
