import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';


@Component({
  selector: 'app-updateemployerprofile',
  templateUrl: './updateemployerprofile.component.html',
  styleUrls: ['./updateemployerprofile.component.css']
})
export class UpdateemployerprofileComponent implements OnInit {

  employerform: FormGroup;
  loading = false;
  employer: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private empService: EmployerService,
    private toastr: ToastrService

  ) {
    this.loading = true
    this.empService.getemployer().subscribe((data) => {
      this.loading = false
      console.log(data)
      this.employer = data
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }

    });

    this.employerform = this.fb.group({
      Organization: ['', [Validators.required]],
      OrganizationType: ['', [Validators.required]],
      CompanyEmail: ['', [Validators.required, Validators.email]],
      CompanyPhone: ['', [Validators.required]],
      NoOfEmployees: ['', [Validators.required]],
      About: ['', [Validators.required]],

    });




  }

  ngOnInit(): void {

  }
  update() {
    this.loading = true
    this.empService.updatermployer(
      this.employer.id,
      this.employerform.controls['Organization'].value,
      this.employerform.controls['OrganizationType'].value,
      this.employerform.controls['CompanyEmail'].value,
      this.employerform.controls['About'].value,
      this.employerform.controls['CompanyPhone'].value.toString(),
      this.employer.startYear,
      this.employerform.controls['NoOfEmployees'].value,

    ).subscribe((data) => {

      console.log("response", data);
      this.loading = true
      this.toastr.info("Profile updated")
      this.router.navigate(['dashboard']);
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        console.log("error", error)
        this.toastr.warning("Something went wrong")
      }
    })
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
