import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  patients: any[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    // this.getPatientslist();
  }

  getPatientslist() {
    this.patientService.getPatients().subscribe(res => {
      // this.patients = res;
      // console.log(this.patients);
    });
  }

}
