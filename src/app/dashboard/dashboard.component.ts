import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  doctor: Doctor;
  total_patients: number;
  doctor_id = "009";

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.getDoctor(this.doctor_id);
  }

  getDoctor(code: string) {
    this.doctorService.getDoctor(code).subscribe(res => {
      if (res._id === code) {
        this.doctor = res;
        this.total_patients = this.doctor.patients.length + this.doctor.waiting
      }
    }, (err) => {
        console.log(err);
    });
  }

}
