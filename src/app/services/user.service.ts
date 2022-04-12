import { DecimalPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://localhost:44361/gateway';
  constructor(private httpClient: HttpClient) { }


  //login user
  public login(username: string, password: string) {
    const a = {
      userName: username,
      password: password
    }
    const body = JSON.stringify(a);

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }) };


    return this.httpClient.post<any>(this.baseUrl + "/login", body, httpOptions);
  }


  //register user
  public register(username: string, password: string, fullname: string, email: string, phone: DecimalPipe, usertpe: string) {
    const a = {
      userName: username,
      fullName: fullname,
      email: email,
      phone: phone,
      password: password,
      userType: usertpe
    }
    const body = JSON.stringify(a);

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }) };


    return this.httpClient.post<any>(this.baseUrl + "/register", body, httpOptions);
  }


  //change password of user
  public changepassword(password: string, id: number) {
    const a = {
      fullName: window.localStorage.getItem("fullName"),
      userName: window.localStorage.getItem("userName"),
      password: password,
      email: window.localStorage.getItem("email"),
      phone: window.localStorage.getItem("phone"),
      userType: window.localStorage.getItem("usertype"),
    }
    const body = JSON.stringify(a);

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }) };


    return this.httpClient.put<any>(this.baseUrl + "/changepassword/" + id, body, httpOptions);

  }

  //get old password of user
  public getpassword(id: number) {
    return this.httpClient.get<any>(this.baseUrl + "/getpassword/" + id);
  }
}
