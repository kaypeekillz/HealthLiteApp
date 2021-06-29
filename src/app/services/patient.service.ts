import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';
import { IPatientservice } from './patient.service.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService implements IPatientservice {

  constructor(private http: HttpClient) { }
  
  getPatients(): Observable<Doctor> {
    return of(
      {
        name: "Dr. Talabi Yusuf",
        patients: [
          {
            name: "Talabi Yusuf",
            apointment_time: "10:30 am"
          },
          {
            name: "Abisade Aderinola",
            apointment_time: "11:00 am"
          },
          {
            name: "Micheal Pasue",
            apointment_time: "11:30 am"
          },
          {
            name: "Dele Awoniyi",
            apointment_time: "12:45 pm"
          },
          {
            name: "John Doe",
            apointment_time: "3:00 pm"
          },
          {
            name: "Vincent Davis",
            apointment_time: "3:30 pm"
          },
          {
            name: "Jacob Jack",
            apointment_time: "4:30 pm"
          },
          {
            name: "Otegbayo Omolade",
            apointment_time: "8:00 pm"
          },
        ],
        waiting: 27
      },
    )
  }

  // // getData() {
  // //   let url = "https://jsonplaceholder.typicode.com/todos";
  // //   return this.http.get(url);
  // // }

  // //  patientMock() {
  // //   var patientList: any[] = [];
  // //   var patient = new Patient();

  // //   patient.name = "Emmanuel Eze";
  // //   patient.apointment_time = "8:45 am";
  // //   patientList.push(patient);

  // //   patient = new Patient();
  // //   patient.name = "Opeyemi Owolabi";
  // //   patient.apointment_time = "9:15 am";
  // //   patientList.push(patient);

  // //   patient = new Patient();
  // //   patient.name = "Sergio Aguero";
  // //   patient.apointment_time = "10:00 am";
  // //   patientList.push(patient);

  // //   patient = new Patient();
  // //   patient.name = "Ridwan Oladimeji";
  // //   patient.apointment_time = "10:15 am";
  // //   patientList.push(patient);

  // //   patient = new Patient();
  // //   patient.name = "Daren Musk";
  // //   patient.apointment_time = "11:00 am";
  // //   patientList.push(patient);

  // //   return patientList;
  // // }
}
