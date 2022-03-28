import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-showprofilejobseeker',
  templateUrl: './showprofilejobseeker.component.html',
  styleUrls: ['./showprofilejobseeker.component.css']
})
export class ShowprofilejobseekerComponent implements OnInit {

  jobseeker: any;
  qualificationList: any = [];
  experienceList: any = [];
  x: number;
  loading = false;
  constructor(private router: Router, private jobseekerService: JobseekerService, private toastr: ToastrService, private modalService: NgbModal) {
    this.x = Number(window.localStorage.getItem('userid'));
  }

  ngOnInit(): void {
    this.loading = true
    this.jobseekerService.getjobseekerprofileforshow(this.x).subscribe((data) => {
      this.jobseeker = data;
      console.log(this.jobseeker)
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
    this.loading = true
    this.jobseekerService.getallqualifications(this.x).subscribe((data) => {
      this.qualificationList = data;
      console.log(this.qualificationList)
      this.loading = false
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        this.toastr.warning("Please add experience if any")
        this.loading = false
        console.log(error)
      }
    })
    this.loading = true
    this.jobseekerService.getallexperience(this.x).subscribe((data) => {
      this.experienceList = data;
      console.log(this.experienceList)
      this.loading = false
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        this.toastr.warning("Please add qualification")
        this.loading = false
        console.log(error)
      }
    })
  }

  removeexperience(id: number) {
    // if(confirm("Are you sure you want to delete")==true){
    this.jobseekerService.deleteexperience(id).subscribe((data) => {
      this.toastr.warning("Experience deleted")
      console.log(data)
      this.ngOnInit()
    }, error => {
      this.toastr.warning("something went wrong not able delete")
      console.log(error)
    })
    // }else{

    // }
  }
  removequalification(id: number) {
    // if(confirm("Are you sure you want to delete")==true){
    this.jobseekerService.deletequalification(id).subscribe((data) => {
      this.toastr.warning("Qualification deleted")
      console.log(data)
      this.ngOnInit()
    }, error => {
      this.toastr.warning("something went wrong not able delete")
      console.log(error)
    })
    // }else{

    // }
  }
  //popup
  open(content: any, id: number) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

      this.removeexperience(id);
    }, (reason) => {
      // this.remove(id);

    });
  }
  //popup
  open1(content: any, id: number) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

      this.removequalification(id);
    }, (reason) => {
      // this.remove(id);

    });
  }


  update() {
    this.router.navigate(['updatejobseekerprofile']);
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
