import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http'

import { Patient } from '../model/patient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseURL : string;

  constructor(
    private http : HttpClient
    ) { 
    this.baseURL = environment.JsonServerURL;
  }

  addPatient(patient : Patient):Observable<any>{
    return this.http.post(`${this.baseURL}/patients`, patient);
  }

  getPatient():Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseURL}/patients`);
  }

}
