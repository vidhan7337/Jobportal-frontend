import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(
    private route: ActivatedRoute,
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
    this.route.params.subscribe(params=>{
      this.id=params['id'];
      console.log(params['id'])
    });
    this.empService.getemployer().subscribe((data) => {

      console.log(data)
      this.employer = data
    }, error => {
      console.log(error)

    });
    this.vacancyServuce.getvacancydetail(this.id).subscribe((data)=>{
      this.vacancy=data
      console.log(this.vacancy)
    },error=>{
      console.log(error)
    })

  }


  save(){
    let x=this.datepipe.transform(this.date, 'yyyy-MM-dd');
    if (this.vacancyform.invalid) {// true if any form validation fail
      return

    } else {
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
        console.log("response",data);
        this.router.navigate(['dashboard']);
      },error=>{
        console.log("error",error)
      })

    }
  }
}
