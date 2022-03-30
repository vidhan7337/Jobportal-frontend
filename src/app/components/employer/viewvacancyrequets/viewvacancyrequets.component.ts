import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';
import { JobseekerService } from 'src/app/services/jobseeker.service';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-viewvacancyrequets',
  templateUrl: './viewvacancyrequets.component.html',
  styleUrls: ['./viewvacancyrequets.component.css']
})
export class ViewvacancyrequetsComponent implements OnInit {

  jobseekerList: any = [];
  vacid!: number;
  loading = false;
  jobseeker: any;
  qualificationList: any = [];
  experienceList: any = [];
  constructor(private route: ActivatedRoute, private router: Router, private empService: EmployerService, private jobseekerService: JobseekerService, private vacService: VacancyService, private toastr: ToastrService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loading = true
    this.route.params.subscribe(params => {
      this.vacid = params['vacid'];
      console.log(params['vacid'])
    });

    this.vacService.appliedusers(Number(this.vacid)).subscribe((data) => {
      this.jobseekerList = data
      this.loading = false
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

  showprofile(content: any,id:number){
    this.jobseekerService.getjobseekerprofileforshow(id).subscribe((data) => {
      this.jobseeker = data;
      console.log(this.jobseeker)
      this.loading = false
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        this.toastr.warning("Something went wrong")
        this.loading = false
        console.log(error)
      }
    })
    this.loading = true
    this.jobseekerService.getallqualifications(id).subscribe((data) => {
      this.qualificationList = data;
      console.log(this.qualificationList)
      this.loading = false
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        this.toastr.warning("No qualification added")
        this.loading = false
        console.log(error)
      }
    })
    this.loading = true
    this.jobseekerService.getallexperience(id).subscribe((data) => {
      this.experienceList = data;
      console.log(this.experienceList)
      this.loading = false
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        this.loading = false
        this.toastr.warning("No experience added")
        console.log(error)
      }
    })
    this.modalService.open(content, { size: 'xl' });

  }

}
