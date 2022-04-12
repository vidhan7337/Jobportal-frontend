import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-addprofilejobseeker',
  templateUrl: './addprofilejobseeker.component.html',
  styleUrls: ['./addprofilejobseeker.component.css']
})
export class AddprofilejobseekerComponent implements OnInit {

  jobseekerform: FormGroup;
  date = new Date();
  loading = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private jobseekerService: JobseekerService
  ) {
    this.jobseekerform = this.fb.group({
      firstName: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      lastName: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      phone: ["", Validators.required],
      address: ["", Validators.required],
      totalExperince: ["", Validators.required],

      expectedSalary: ["", Validators.required],
      dateofBirth: [null, Validators.required],
    })
  }

  ngOnInit(): void {
  }

  //add jobseeker profile details
  save() {
    this.loading = true
    if (this.jobseekerform.invalid) {
      return
    } else {
      this.jobseekerService.addjobseekerprofile(
        this.jobseekerform.controls['firstName'].value,
        this.jobseekerform.controls['lastName'].value,

        this.jobseekerform.controls['phone'].value,
        this.jobseekerform.controls['address'].value,
        this.jobseekerform.controls['totalExperince'].value,
        this.jobseekerform.controls['expectedSalary'].value,
        this.jobseekerform.controls['dateofBirth'].value,
      ).subscribe((data) => {
        this.loading = false
        console.log("response", data);
        window.localStorage.setItem('userid', data.id)
        this.toastr.info("Added details check profile section")
        this.router.navigate(['dashboard']);
      }, error => {
        if (error.status == 401) {
          this.toastr.error("Session expired login again")
        }
        else {
          this.loading = false
          this.toastr.warning("something went wrong")
          console.log("error", error)
        }
      })
    }
  }

}
