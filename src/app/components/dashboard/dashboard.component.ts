import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employer:any;
  constructor(private router:Router,private empService:EmployerService) { 
    
   
  }
   profileadded: boolean=false;
   
  ngOnInit(): void {
    this.empService.getemployer().subscribe((data)=>{
      this.profileadded=true;
      console.log(data)
       this.employer=data
   },error=>{
   
       this.profileadded=false;
    
   
  });
  
   
  }
  onSubmit=  () => {
    
     
    

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
