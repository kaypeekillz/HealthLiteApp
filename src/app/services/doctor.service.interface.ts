import { Observable } from "rxjs";
import { Doctor } from "../models/doctor";

export interface IDoctorservice {
    getDoctor(id): Observable<Doctor>;
}