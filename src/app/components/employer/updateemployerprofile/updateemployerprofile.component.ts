import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';


@Component({
  selector: 'app-updateemployerprofile',
  templateUrl: './updateemployerprofile.component.html',
  styleUrls: ['./updateemployerprofile.component.css']
})
export class UpdateemployerprofileComponent implements OnInit {

  employerform: FormGroup;
 
  employer:any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private empService:EmployerService,
    
  ) { 

    this.empService.getemployer().subscribe((data)=>{
      
      console.log(data)
       this.employer=data
   },error=>{

  });
    
    this.employerform=this.fb.group({
      Organization:['', [Validators.required]],
      OrganizationType:['', [Validators.required]],
      CompanyEmail:['', [Validators.required,Validators.email]],
      CompanyPhone:['', [Validators.required]],
      NoOfEmployees:['', [Validators.required]],
      
      About:['', [Validators.required]],
      
    });

    
  
  
  }

  ngOnInit(): void {
    
  }
  update(){
    this.empService.updatermployer(
      this.employer.id,
      this.employerform.controls['Organization'].value,
        this.employerform.controls['OrganizationType'].value,
        this.employerform.controls['CompanyEmail'].value,
        this.employerform.controls['About'].value,
        this.employerform.controls['CompanyPhone'].value.toString(),
        this.employer.startYear,
        this.employerform.controls['NoOfEmployees'].value,

    ).subscribe((data)=>{
      console.log("response",data);
      this.router.navigate(['dashboard']);
    },error=>{
      console.log("error",error)
    })
  }

}
