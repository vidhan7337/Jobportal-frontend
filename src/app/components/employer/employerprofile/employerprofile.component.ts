import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';


@Component({
  selector: 'app-employerprofile',

  templateUrl: './employerprofile.component.html',
  styleUrls: ['./employerprofile.component.css']
})
export class EmployerprofileComponent implements OnInit {

  employer: any;
  loading = false;
  constructor(private router: Router, private empService: EmployerService, private toastr: ToastrService) {
    this.loading = true;
    this.empService.getemployer().subscribe((data) => {

      console.log(data)
      this.employer = data
      this.loading = false;
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        this.toastr.warning("Something went wrong")
      }


    });
  }

  ngOnInit(): void {

  }
  update() {
    this.router.navigate(['updateemployerprofile']);
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
