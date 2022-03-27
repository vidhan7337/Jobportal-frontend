import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { EmployerService } from 'src/app/services/employer.service';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-updatevacancy',
  templateUrl: './updatevacancy.component.html',
  styleUrls: ['./updatevacancy.component.css']
})
export class UpdatevacancyComponent implements OnInit {
  vacancyform: FormGroup;
  id!: number;
  employer: any;
  vacancy:any;
  date=new Date();
  loading=false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private empService: EmployerService,
    private vacancyServuce: VacancyService,
    public datepipe: DatePipe,
    private toastr:ToastrService
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
    this.loading=true
    this.route.params.subscribe(params=>{
      this.id=params['id'];
      console.log(params['id'])
    });
    this.empService.getemployer().subscribe((data) => {

      console.log(data)
      this.employer = data
      this.loading=false
    }, error => {
      console.log(error)
      this.toastr.warning("Something went wrong")
      this.loading=false

    });
    this.loading=true
    this.vacancyServuce.getvacancydetail(this.id).subscribe((data)=>{
      this.vacancy=data
      console.log(this.vacancy)
      
      this.loading=false
    },error=>{
      console.log(error)
      this.toastr.warning("Something went wrong")
      this.loading=false
    })

  }


  save(){
    this.loading=false
    let x=this.datepipe.transform(this.date, 'yyyy-MM-dd');
    if (this.vacancyform.invalid) {// true if any form validation fail
      return

    } else if(this.vacancyform.controls['MaxSalary'].value<this.vacancyform.controls['MinSalary'].value){
      this.loading=false
      this.toastr.error("Maximum salary cannot be less than minimum salary")
    }else {
      // on Update User info
      this.vacancyServuce.updatevacancy(
        this.id,
        this.employer.organization,
        this.vacancy.publishedDate,
        this.vacancyform.controls['NoofVacancies'].value,
        this.vacancyform.controls['MinimumQualification'].value,
        this.vacancyform.controls['JobDescription'].value,
        this.vacancyform.controls['ExperienceRequired'].value,
        this.vacancyform.controls['LastDate'].value,
        this.vacancyform.controls['MinSalary'].value,
        this.vacancyform.controls['MaxSalary'].value,

      ).subscribe((data)=>{
        this.loading=false
        console.log("response",data);
        this.toastr.info("Vacancy Updated")
        this.router.navigate(['dashboard']);
      },error=>{
        this.loading=false
        this.toastr.warning("Something went wrong")
        console.log("error",error)
      })

    }
  }
}
