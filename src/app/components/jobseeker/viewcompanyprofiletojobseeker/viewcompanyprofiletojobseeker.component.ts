import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-viewcompanyprofiletojobseeker',
  templateUrl: './viewcompanyprofiletojobseeker.component.html',
  styleUrls: ['./viewcompanyprofiletojobseeker.component.css']
})
export class ViewcompanyprofiletojobseekerComponent implements OnInit {

  employer:any;
  org!: string;
  loading=false;
  constructor(private router:Router,private empService:EmployerService,private route: ActivatedRoute,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.loading=true
    this.route.params.subscribe(params=>{
      this.org=params['org'];
      console.log(params['org'])
    });
    this.empService.getemployerbyname(this.org).subscribe((data)=>{
      this.employer=data
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
