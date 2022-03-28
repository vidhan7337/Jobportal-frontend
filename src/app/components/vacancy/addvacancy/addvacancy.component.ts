import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { EmployerService } from '../../../services/employer.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addvacancy',
  templateUrl: './addvacancy.component.html',
  styleUrls: ['./addvacancy.component.css']
})
export class AddvacancyComponent implements OnInit {

  vacancyform: FormGroup;
  employer: any;
  date = new Date();
  loading = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private empService: EmployerService,
    private vacancyServuce: VacancyService,
    public datepipe: DatePipe,
    private toastr: ToastrService
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
    this.loading = true
    this.empService.getemployer().subscribe((data) => {

      console.log(data)
      this.employer = data
      this.loading = false
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        this.toastr.warning("Something went wrong")
        this.loading = false
      }
    });
  }


  save() {
    this.loading = true
    let x = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    if (this.vacancyform.invalid) {// true if any form validation fail
      return


    } else if (this.vacancyform.controls['MaxSalary'].value < this.vacancyform.controls['MinSalary'].value) {
      this.loading = false
      this.toastr.error("Maximum salary cannot be less than minimum salary")

    }
    else {
      // on Update User info
      this.vacancyServuce.addvacancy(
        this.employer.organization,
        x == null ? "null" : x,
        this.vacancyform.controls['NoofVacancies'].value,
        this.vacancyform.controls['MinimumQualification'].value,
        this.vacancyform.controls['JobDescription'].value,
        this.vacancyform.controls['ExperienceRequired'].value,
        this.vacancyform.controls['LastDate'].value,
        this.vacancyform.controls['MinSalary'].value,
        this.vacancyform.controls['MaxSalary'].value,

      ).subscribe((data) => {
        console.log("response", data);
        this.loading = false
        this.toastr.info("Vacancy Added")
        this.router.navigate(['dashboard']);
      }, error => {
        if (error.status == 401) {
          this.toastr.error("Session expired login again")
        }
        else {
          this.loading = false
          this.toastr.warning("Something went wrong")
          console.log("error", error)
        }
      })

    }
  }
  onSubmit = () => {


    this.toastr.info("Logout successful")

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
