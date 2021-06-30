import { Component, Input, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  patients: any[];
  id = "009";
  today = "";

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.getpatientsFromDoctor(this.id);
    this.getDate();
  }

  getpatientsFromDoctor(code: string) {
    this.doctorService.getDoctor(code).subscribe(res => {
      if (res._id === code) {
        this.patients = res.patients;
      }
    }, (err) => {
      console.log(err);
    });
  }

  getDate() {
    var today = new Date();
    var month = "";
    var dayOfWeek = ""
    var dayIndex = today.getDay()
    var day = String(today.getDate())
    var mm = String(today.getMonth() + 1)
    var year = today.getFullYear();

    if(dayIndex == 1) {
      dayOfWeek = "Monday"
    } else if (dayIndex == 2){
      dayOfWeek = "Tuesday"
    } else if (dayIndex == 3){
      dayOfWeek = "Wednesday"
    } else if (dayIndex == 4){
      dayOfWeek = "Thursday"
    } else if (dayIndex == 5){
      dayOfWeek = "Friday"
    } else if (dayIndex == 6){
      dayOfWeek = "Saturday"
    } else {
      dayOfWeek = "Sunday"
    }

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
    this.today = dayOfWeek + ' - ' + day + " " + month + " " + year; 
    // console.log(this.today);
    
  };

}
