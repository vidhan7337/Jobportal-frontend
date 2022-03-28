import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  hide1 = true;
  hide2 = true;
  hide3 = true;
  pass!: string;
  loading = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    let id = window.localStorage.getItem("id");
    this.userService.getpassword(Number(id)).subscribe((data) => {
      this.pass = data.toString();


    })
  }
  onSubmit() {
    this.loading = true;
    let id = window.localStorage.getItem("id");

    console.log("On submit")

    let oldPassword = this.changePasswordForm.controls["oldPassword"].value;
    let newPassword = this.changePasswordForm.controls['newPassword'].value;
    let confirmPassword = this.changePasswordForm.controls['confirmPassword'].value;
    if (newPassword != confirmPassword) {
      this.toastr.warning("Password are not same")
      this.loading = false;
    } else if (oldPassword != this.pass) {

      this.toastr.warning("Old password is wrong")
      this.loading = false;
    } else {
      const password = this.changePasswordForm.controls['newPassword'].value;

      this.userService.changepassword(password, Number(id)).subscribe((data) => {
        console.log("response", data);




        this.loading = false;
        this.router.navigate(['dashboard']);

        this.toastr.info("Password changed successfully")
      }, error => {
        this.loading = false
        console.log("error", error)

      }
      )
    }


  }
  onSubmitlogout = () => {



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
