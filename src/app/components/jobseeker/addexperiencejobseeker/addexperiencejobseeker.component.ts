import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-addexperiencejobseeker',
  templateUrl: './addexperiencejobseeker.component.html',
  styleUrls: ['./addexperiencejobseeker.component.css']
})
export class AddexperiencejobseekerComponent implements OnInit {

  experienceform: FormGroup;
  date = new Date();
  loading = false;
  constructor(private router: Router, private fb: FormBuilder,
    private jobseekerService: JobseekerService, private toastr: ToastrService) {

    this.experienceform = this.fb.group({
      companyname: ["", Validators.required],
      startyear: [null, Validators.required],
      endyear: [null, Validators.required],
      companyurl: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      designation: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      jobdescription: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    })
  }

  ngOnInit(): void {
  }

  //logout button
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

  //add experience
  save() {
    this.loading = true
    if (this.experienceform.invalid) {
      return
    }
    else if (this.experienceform.controls['endyear'].value < this.experienceform.controls['startyear'].value) {
      this.loading = false
      this.toastr.warning("please fill proper start and end year")

    } else {
      this.jobseekerService.addexperience(
        this.experienceform.controls['companyname'].value,
        this.experienceform.controls['startyear'].value,
        this.experienceform.controls['endyear'].value,
        this.experienceform.controls['companyurl'].value,
        this.experienceform.controls['designation'].value,
        this.experienceform.controls['jobdescription'].value

      ).subscribe((data) => {
        console.log("response", data);
        window.localStorage.setItem('userid', data.id)
        this.loading = false
        this.toastr.info("Experience added check profile section")

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
