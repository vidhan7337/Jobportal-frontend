import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { EmployerService } from 'src/app/services/employer.service';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employer: any;
  jobseeker: any;
  loading = false;
  constructor(private router: Router, private empService: EmployerService, private jobseekerService: JobseekerService, private toastr: ToastrService) {


  }
  profileaddedemp: boolean = false;
  profileaddedjs: boolean = false;
  profile: string = "Employer";

  ngOnInit(): void {

    if (window.localStorage.getItem('usertype') == "Employer") {
      this.loading = true
      this.profile = "Employer";
      this.empService.getemployer().subscribe((data) => {
        this.profileaddedemp = true;

        console.log(data)
        this.employer = data
        window.localStorage.setItem("org", this.employer.organization)
        this.loading = false
      }, error => {
        if (error.status == 401) {
          this.toastr.error("Session expired login again")
        }
        else {
          this.toastr.warning("Please add your details first")
          this.profileaddedemp = false;
          this.loading = false
        }
      });
    } else {
      this.loading = true
      this.profile = "JobSeeker";
      this.jobseekerService.getjobseekerprofile().subscribe((data) => {
        this.profileaddedjs = true;

        this.jobseeker = data
        console.log(data)
        window.localStorage.setItem('userid', data.id)

        this.loading = false
      }, error => {
        if (error.status == 401) {
          this.toastr.error("Session expired login again")
        }
        else {
          this.toastr.warning("Please add your details first")
          this.profileaddedjs = false;
          this.loading = false
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
