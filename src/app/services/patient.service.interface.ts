import { Observable } from "rxjs";
import { Doctor } from "../models/doctor";
import { Patient } from "../models/patient";

export interface IPatientservice {
    getPatients(): Observable<Doctor>;
}