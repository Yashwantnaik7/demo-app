import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Patient } from 'src/app/model/patient.model';
import { PatientService } from 'src/app/services/patient.service';
import { PatientsComponent } from '../patients/patients.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminForm : FormGroup;

  username = new FormControl('');
  dob = new FormControl('');

  constructor(private fb : FormBuilder,
    private patientService : PatientService) { //new
    this.adminForm = this.fb.group({
      username : this.username,
      dob : this.dob
    })
  }

  patients : Patient[]; //new

  ngOnInit(): void { //new
    this.patientService.getPatient().subscribe((response) => {
      this.patients = response;
      console.log(this.patients);
      
    })
  }

  addVaccine(){

  }

  selectedPname : string; //new
  selectedData : Date;
  //initialize all the data

  selectPatient(){
   this.selectedPname = this.adminForm.value.username;
   for(let patient of this.patients){
      if(this.selectedPname == patient.username){
        this.selectedData = patient.dob;
        //add all the data
      }
   }
  }

}
