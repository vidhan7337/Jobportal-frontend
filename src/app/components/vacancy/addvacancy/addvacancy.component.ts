import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { EmployerService } from '../../../services/employer.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addvacancy',
  templateUrl: './addvacancy.component.html',
  styleUrls: ['./addvacancy.component.css']
})
export class AddvacancyComponent implements OnInit {

  vacancyform: FormGroup;
  employer: any;
  date=new Date();
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private empService: EmployerService,
    private vacancyServuce: VacancyService,
    public datepipe: DatePipe
  ) {
    this.vacancyform = this.fb.group({
      // PublishedBy: ['', [Validators.required]],
      // PublishedDate: [null, [Validators.required]],
      NoofVacancies: ['', [Validators.required]],
      MinimumQualification: ['', [Validators.required]],
      JobDescription: ['', [Validators.required]],
      ExperienceRequired: ['', [Validators.required]],
      LastDate: [null, [Validators.required]],
      MinSalary: ['', [Validators.required]],
      MaxSalary: ['', [Validators.required]]
    });
     


  }

  ngOnInit(): void {

    this.empService.getemployer().subscribe((data) => {

      console.log(data)
      this.employer = data
    }, error => {


    });
  }


  save() {
    let x=this.datepipe.transform(this.date, 'yyyy-MM-dd');
    if (this.vacancyform.invalid) {// true if any form validation fail
      return


    } else {
      // on Update User info
      this.vacancyServuce.addvacancy(
        this.employer.organization,
        x==null?"null":x,
        this.vacancyform.controls['NoofVacancies'].value,
        this.vacancyform.controls['MinimumQualification'].value,
        this.vacancyform.controls['JobDescription'].value,
        this.vacancyform.controls['ExperienceRequired'].value,
        this.vacancyform.controls['LastDate'].value,
        this.vacancyform.controls['MinSalary'].value,
        this.vacancyform.controls['MaxSalary'].value,

      ).subscribe((data)=>{
        console.log("response",data);
        this.router.navigate(['dashboard']);
      },error=>{
        console.log("error",error)
      })

    }
  }
  onSubmit=  () => {
    
     
    

    this.router.navigate(['/login']);
    window.localStorage.removeItem("email");
    
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("userName");
    window.localStorage.removeItem("password");
    window.localStorage.removeItem("usertype");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("fullName");
    window.localStorage.removeItem("phone");
}

}
