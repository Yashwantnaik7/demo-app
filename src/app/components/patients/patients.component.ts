import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  
  patientForm: FormGroup;

  username = new FormControl('', [Validators.required]);
  dob = new FormControl('',[Validators.required]);

  constructor(private fb: FormBuilder,
    private patientService:PatientService,
    private router : Router
    ) { 
    this.patientForm = this.fb.group({
      username: this.username,
      dob : this.dob
    })
  }

  ngOnInit(): void {
  }

  onRegister() {
    const { username, dob} = this.patientForm.value; //destructuring
    const patient: Patient = {
      username: username,
      dob : dob
    }
    this.patientService.addPatient(patient).subscribe((response) => {
      this.router.navigate(['']);
    });
  }
}
