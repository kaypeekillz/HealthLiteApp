import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  today: string;

  constructor() { }

  ngOnInit() {
    this.getDate();
  }

  calendarPlugins = [dayGridPlugin];

  getDate() {
    var today = new Date();
    var month = "";
    var day = String(today.getDate())
    var mm = String(today.getMonth() + 1)
    var year = today.getFullYear();
    if (mm == "1") {
      month = "January"
    } else if (mm == "2") {
      month = "Febuary"
    } else if (mm == "3") {
      month = "March"
    } else if (mm == "4") {
      month = "April"
    } else if (mm == "5") {
      month = "May"
    } else if (mm == "6") {
      month = "June"
    } else if (mm == "7") {
      month = "July"
    } else if (mm == "8") {
      month = "August"
    } else if (mm == "9") {
      month = "September"
    } else if (mm == "10") {
      month = "October"
    } else if (mm == "11") {
      month = "November"
    }  else {
      month = "December"
    }
    this.today = day + " " + month + " " + year; 
    console.log(this.today);
    
  };

}
