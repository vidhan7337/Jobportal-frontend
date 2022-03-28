import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-updateexperiencejobseeker',
  templateUrl: './updateexperiencejobseeker.component.html',
  styleUrls: ['./updateexperiencejobseeker.component.css']
})
export class UpdateexperiencejobseekerComponent implements OnInit {

  experienceform: FormGroup;
  experience: any;
  id!: number;
  date = new Date();
  loading = false;
  constructor(private router: Router, private fb: FormBuilder,
    private route: ActivatedRoute,
    private jobseekerService: JobseekerService,
    private toastr: ToastrService) {

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
    this.loading = true
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(params['id'])
    });
    this.jobseekerService.getsingleexperience(this.id).subscribe((data) => {
      this.experience = data
      this.loading = false
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        this.toastr.warning("something went wrong")
        this.loading = false
        console.log(error)
      }
    })
  }
  save() {
    this.loading = true
    if (this.experienceform.invalid) {
      return
    }
    else if (this.experienceform.controls['endyear'].value < this.experienceform.controls['startyear'].value) {
      this.loading = false
      this.toastr.warning("please fill proper start and end year")

    } else {
      this.jobseekerService.updateexperience(
        this.id,
        this.experienceform.controls['companyname'].value,
        this.experienceform.controls['startyear'].value,
        this.experienceform.controls['endyear'].value,
        this.experienceform.controls['companyurl'].value,
        this.experienceform.controls['designation'].value,
        this.experienceform.controls['jobdescription'].value

      ).subscribe((data) => {
        console.log("response", data);
        this.loading = false
        this.toastr.info("Experience updated check profile section")
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
