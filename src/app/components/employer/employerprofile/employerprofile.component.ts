import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';


@Component({
  selector: 'app-employerprofile',
  
  templateUrl: './employerprofile.component.html',
  styleUrls: ['./employerprofile.component.css']
})
export class EmployerprofileComponent implements OnInit {

  employer:any;
  constructor(private router:Router,private empService:EmployerService) { 
    this.empService.getemployer().subscribe((data)=>{
      
      console.log(data)
       this.employer=data
   },error=>{
   
       
    
   
  });
  }

  ngOnInit(): void {

  }
  update(){
    this.router.navigate(['updateemployerprofile']);
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
