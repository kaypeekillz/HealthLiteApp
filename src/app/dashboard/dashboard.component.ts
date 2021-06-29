import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  doctor: Doctor;
  total_patients: number;

  constructor(private doctorService: PatientService) { }

  ngOnInit() {
    this.getDoctor();
  }

  getDoctor() {
    this.doctorService.getPatients().subscribe(res => {
      this.doctor = res;
      this.total_patients = this.doctor.patients.length + this.doctor.waiting
      // console.log(res.patients.length);
    });
  }

}
