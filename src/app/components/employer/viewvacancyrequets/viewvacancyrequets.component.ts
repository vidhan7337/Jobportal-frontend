import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  jobseekerList:any=[];
  vacid!: number;
  loading=false;
  constructor(private route: ActivatedRoute,private router:Router,private empService:EmployerService,private jobseekerService:JobseekerService,private vacService:VacancyService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.loading=true
    this.route.params.subscribe(params=>{
      this.vacid=params['vacid'];
      console.log(params['vacid'])
    });

    this.vacService.appliedusers(Number(this.vacid)).subscribe((data)=>{
      this.jobseekerList=data
      this.loading=false
    })
  
  }
  onSubmit=  () => {
    
     
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
