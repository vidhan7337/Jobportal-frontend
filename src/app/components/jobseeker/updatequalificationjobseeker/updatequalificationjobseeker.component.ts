import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-updatequalificationjobseeker',
  templateUrl: './updatequalificationjobseeker.component.html',
  styleUrls: ['./updatequalificationjobseeker.component.css']
})
export class UpdatequalificationjobseekerComponent implements OnInit {

  qualificationform: FormGroup;
  qualification: any;
  id!: number;
  loading = false;
  date = new Date();
  constructor(private router: Router, private fb: FormBuilder,
    private route: ActivatedRoute,
    private jobseekerService: JobseekerService,
    private toastr: ToastrService) {
    this.qualificationform = this.fb.group({
      qualificationName: ["", Validators.required],
      University: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      yearOfCompletion: [null, Validators.required],
      GradeorScore: ["", Validators.required]
    })

  }

  ngOnInit(): void {
    this.loading = true
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(params['id'])
    });
    //get qualification details of jobseeker
    this.jobseekerService.getsinglequalification(this.id).subscribe((data) => {
      this.qualification = data
      this.loading = false
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        this.loading = false
        this.toastr.warning("something went wrong")
        console.log(error)
      }
    })
  }


  //update qualification details
  save() {
    this.loading = true
    if (this.qualificationform.invalid) {
      return
    } else {
      this.jobseekerService.updatequalification(
        this.id,
        this.qualificationform.controls['qualificationName'].value,
        this.qualificationform.controls['University'].value,

        this.qualificationform.controls['yearOfCompletion'].value,
        this.qualificationform.controls['GradeorScore'].value,

      ).subscribe((data) => {
        console.log("response", data);
        this.loading = false
        this.toastr.info("Qualification updated check profile section")
        this.router.navigate(['dashboard']);
      }, error => {
        if (error.status == 401) {
          this.toastr.error("Session expired login again")
        }
        else {
          this.toastr.warning("something went wrong")
          this.loading = false
          console.log("error", error)
        }
      })
    }
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
}
