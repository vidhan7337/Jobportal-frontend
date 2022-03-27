import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-viewjobseekerprofiletoemployer',
  templateUrl: './viewjobseekerprofiletoemployer.component.html',
  styleUrls: ['./viewjobseekerprofiletoemployer.component.css']
})
export class ViewjobseekerprofiletoemployerComponent implements OnInit {

  jobseeker:any;
  qualificationList:any=[];
  experienceList:any=[];
  userid!: number;
  loading=false;
  constructor(private route: ActivatedRoute,private router:Router,private jobseekerService:JobseekerService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.loading=true
    this.route.params.subscribe(params=>{
      this.userid=params['userid'];
      console.log(params['userid'])
    });
    this.jobseekerService.getjobseekerprofileforshow(this.userid).subscribe((data)=>{
      this.jobseeker=data;
      console.log(this.jobseeker)
      this.loading=false
    },error=>{
      this.toastr.warning("Something went wrong")
      this.loading=false
      console.log(error)
    })
    this.loading=true
    this.jobseekerService.getallqualifications(this.userid).subscribe((data)=>{
      this.qualificationList=data;
      console.log(this.qualificationList)
      this.loading=false
    },error=>{
      this.toastr.warning("No qualification added")
      this.loading=false
      console.log(error)
    })
    this.loading=true
    this.jobseekerService.getallexperience(this.userid).subscribe((data)=>{
      this.experienceList=data;
      console.log(this.experienceList)
      this.loading=false
    },error=>{
      this.loading=false
      this.toastr.warning("No experience added")
      console.log(error)
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
