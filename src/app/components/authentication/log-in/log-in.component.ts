import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    userName: ["", [Validators.required]],
    password: ["", Validators.required]
  })
  hide = true;
  loading = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.loading = true
    console.log("On submit")
    let username = this.loginForm.controls["userName"].value;
    let password = this.loginForm.controls['password'].value;

    this.userService.login(username, password).subscribe((data) => {
      console.log("response", data);
      console.log(data.status);
      window.localStorage.setItem("email", data.email);
      window.localStorage.setItem("id", data.id);
      window.localStorage.setItem("userName", data.userName);

      window.localStorage.setItem("usertype", data.userType);
      window.localStorage.setItem("token", data.tokenString);
      window.localStorage.setItem("fullName", data.fullName);
      window.localStorage.setItem("phone", data.phone);
      this.loading = false;
      this.toastr.info("Login successful")
      this.router.navigate(['dashboard']);
    }, error => {

      console.log("error", error)
      this.loading = false;
      this.toastr.warning("Invalid username or password")
    }
    )


  }

}
