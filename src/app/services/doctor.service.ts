import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Doctor } from '../models/doctor';
import { IDoctorservice } from './doctor.service.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorService implements IDoctorservice {

  constructor() { }
   
  getDoctor(id: string): Observable<Doctor> {
    if (id) {
      return of(
        {
          _id: "009",
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
  }

  
}
