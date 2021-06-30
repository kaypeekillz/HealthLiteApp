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
    // this.getDate();
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


}
