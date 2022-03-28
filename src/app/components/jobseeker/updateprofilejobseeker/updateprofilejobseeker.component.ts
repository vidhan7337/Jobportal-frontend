import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-updateprofilejobseeker',
  templateUrl: './updateprofilejobseeker.component.html',
  styleUrls: ['./updateprofilejobseeker.component.css']
})
export class UpdateprofilejobseekerComponent implements OnInit {

  jobseekerform: FormGroup;
  jobseeker: any;
  x: number;
  loading = false;
  date = new Date();
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private jobseekerService: JobseekerService,
    private toastr: ToastrService
  ) {
    this.x = Number(window.localStorage.getItem('userid'));
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
    this.loading = true
    this.jobseekerService.getjobseekerprofileforshow(this.x).subscribe((data) => {
      this.jobseeker = data
      this.loading = false
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        this.loading = false
        console.log(error)
        this.toastr.warning("something went wrong")
      }
    })
  }
  save() {
    this.loading = true
    if (this.jobseekerform.invalid) {
      return
    } else {
      this.jobseekerService.updatejobseekerprofile(
        this.x,
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
        this.toastr.info("Profile updated check profile section")
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
}
