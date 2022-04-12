import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-addqualificationjobseeker',
  templateUrl: './addqualificationjobseeker.component.html',
  styleUrls: ['./addqualificationjobseeker.component.css']
})
export class AddqualificationjobseekerComponent implements OnInit {

  qualificationform: FormGroup;
  date = new Date();
  loading = false;
  constructor(private router: Router, private fb: FormBuilder,
    private jobseekerService: JobseekerService, private toastr: ToastrService) {
    this.qualificationform = this.fb.group({
      qualificationName: ["", Validators.required],
      University: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      yearOfCompletion: [null, Validators.required],
      GradeorScore: ["", Validators.required]
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

  //add qualificaton of jobseeker
  save() {
    this.loading = true
    if (this.qualificationform.invalid) {
      return
    } else {
      this.jobseekerService.addqualification(
        this.qualificationform.controls['qualificationName'].value,
        this.qualificationform.controls['University'].value,

        this.qualificationform.controls['yearOfCompletion'].value,
        this.qualificationform.controls['GradeorScore'].value,

      ).subscribe((data) => {
        this.loading = false
        console.log("response", data);
        window.localStorage.setItem('userid', data.id)
        this.toastr.info("Qualification added check profile section")
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
