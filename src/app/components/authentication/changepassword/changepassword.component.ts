import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  public changePasswordForm = this.formBuilder.group({
    oldPassword: ["", [Validators.required]],
    newPassword: ["", Validators.required],
    confirmPassword: ["", Validators.required]
  })
  hide1=true;
  hide2=true;
  hide3=true;
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("On submit")
    let id = window.localStorage.getItem("id");
    let oldPassword = this.changePasswordForm.controls["oldPassword"].value;
    let newPassword = this.changePasswordForm.controls['newPassword'].value;
    let confirmPassword = this.changePasswordForm.controls['confirmPassword'].value;
    if (newPassword != confirmPassword) {
      alert("Password not same")
    } else if (oldPassword != window.localStorage.getItem("password")) {
      alert("Old password is wrong")
    } else {
      const password = this.changePasswordForm.controls['newPassword'].value;
      
      this.userService.changepassword(password, Number(id)).subscribe((data) => {
        console.log("response", data);
       

        window.localStorage.setItem("password",password);


        this.router.navigate(['dashboard']);
        alert("Password Changed successfully");
      }, error => {
        console.log("error", error)

      }
      )
    }


  }
  onSubmitlogout=  () => {
    
     
    

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
