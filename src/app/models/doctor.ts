import { Patient } from "./patient";

export class Doctor {
    _id: string;
    name: string;
    patients: Patient[];
    waiting: number;
    
}