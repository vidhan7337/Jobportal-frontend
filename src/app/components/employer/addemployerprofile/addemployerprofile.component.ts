import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employer } from '../../../models/employer';
import { EmployerService } from '../../../services/employer.service';

@Component({
  selector: 'app-addemployerprofile',
  templateUrl: './addemployerprofile.component.html',
  styleUrls: ['./addemployerprofile.component.css']
})
export class AddemployerprofileComponent implements OnInit {

  employerform: FormGroup;
 
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private empService:EmployerService,
    
  ) { 
    this.employerform=this.fb.group({
      Organization:['', [Validators.required]],
      OrganizationType:['', [Validators.required]],
      CompanyEmail:['', [Validators.required,Validators.email]],
      CompanyPhone:['', [Validators.required]],
      NoOfEmployees:['', [Validators.required]],
      StartYear:[null, [Validators.required]],
      About:['', [Validators.required]],
      
    });
   
  }

  ngOnInit(): void {
   
  }
  save(){
    if (this.employerform.invalid) {// true if any form validation fail
      return

   
    } else {
      // on Update User info
      this.empService.addemployer(
        this.employerform.controls['Organization'].value,
        this.employerform.controls['OrganizationType'].value,
        this.employerform.controls['CompanyEmail'].value,
        this.employerform.controls['About'].value,
        this.employerform.controls['CompanyPhone'].value.toString(),
        this.employerform.controls['StartYear'].value,
        this.employerform.controls['NoOfEmployees'].value,
        

      ).subscribe((data)=>{
        console.log("response",data);
        this.router.navigate(['dashboard']);
      },error=>{
        console.log("error",error)
      })
     
    }
  }

}
