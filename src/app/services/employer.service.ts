import { DecimalPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employer } from '../models/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  baseUrl = 'https://localhost:44361/gateway/employer'

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8', 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }) };
  constructor(private httpClient: HttpClient) { }
  
  
  //get employer details
  public getemployer() {
    let email = window.localStorage.getItem('email');

    return this.httpClient.get(this.baseUrl + "/" + email, this.httpOptions);
  }

  //add employer details
  public addemployer(Organization: string, OrganizationType: string, CompanyEmail: string, About: string, CompanyPhone: string, StartYear: string, NoOfEmployees: number) {
    const a = {
      organization: Organization,
      organizationType: OrganizationType,
      companyEmail: CompanyEmail,
      companyPhone: CompanyPhone,
      noOfEmployees: NoOfEmployees,
      startYear: StartYear,
      about: About,
      createdBy: window.localStorage.getItem('email')
    }

    const body = JSON.stringify(a);
    console.log(body)



    return this.httpClient.post<any>(this.baseUrl, body, this.httpOptions);
  }

  //update employer details
  public updatermployer(id: number, Organization: string, OrganizationType: string, CompanyEmail: string, About: string, CompanyPhone: string, StartYear: string, NoOfEmployees: number) {
    const a = {
      organization: Organization,
      organizationType: OrganizationType,
      companyEmail: CompanyEmail,
      companyPhone: CompanyPhone,
      noOfEmployees: NoOfEmployees,
      startYear: StartYear,
      about: About,
      createdBy: window.localStorage.getItem('email')
    }

    const body = JSON.stringify(a);
    console.log(body)



    return this.httpClient.put<any>(this.baseUrl + "/" + id, body, this.httpOptions)
  }

  //get employer details by organization name
  public getemployerbyname(org: string) {


    return this.httpClient.get("https://localhost:44361/gateway/viewcompany/" + org, this.httpOptions);
  }
}
