import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // userType: string = '';
  // Roles: any = ['Employer','JobSeeker'];
  userType = new FormControl('Employer');
  hide = true;
  loading = false;
  public registerForm = this.formBuilder.group({
    userName: ["", Validators.required],
    fullName: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", Validators.required],
    password: ["", Validators.required],
    userType: this.userType
  })
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService) { }
  ngOnInit() {
  }

  selectChangeHandler(event: any) {
    //update the ui
    this.userType = event.target.value;
  }
  onSubmit() {
    this.loading = true
    console.log("On submit")
    let username = this.registerForm.controls["userName"].value;
    let fullname = this.registerForm.controls["fullName"].value;
    let email = this.registerForm.controls["email"].value;
    let phone = this.registerForm.controls["phone"].value;
    let usertype = this.registerForm.controls["userType"].value;
    let password = this.registerForm.controls['password'].value;
    this.userService.register(username, password, fullname, email, phone, usertype).subscribe((data) => {
      console.log("response", data);
      this.loading = false;
      this.router.navigate(['login']);
      this.toastr.info("Successfully registered now please login")

    }, error => {
      console.log("error", error)
      this.loading = false;
      this.toastr.error("Please fill proper information")
    }
    )
    // this.userService.login(username,password).subscribe((data)=>{
    //   console.log("response",data);
    // },error=>{
    //   console.log("error",error)
    // }
    // )
  }
}