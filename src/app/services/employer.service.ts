import { DecimalPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employer } from '../models/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  baseUrl='https://localhost:44361/gateway/employer'
  constructor(private httpClient: HttpClient) { }

  public getemployer(){
    let email=window.localStorage.getItem('email');
    return this.httpClient.get(this.baseUrl+"/"+email);
  }
  public addemployer(Organization: string, OrganizationType: string, CompanyEmail: string, About: string, CompanyPhone: string, StartYear: string,NoOfEmployees:number) {
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
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }) };


    return this.httpClient.post<any>(this.baseUrl, body, httpOptions);
  }

  public updatermployer(id:number,Organization: string, OrganizationType: string, CompanyEmail: string, About: string, CompanyPhone: string, StartYear: string,NoOfEmployees:number){
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
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }) };


    return this.httpClient.put<any>(this.baseUrl+"/"+id, body, httpOptions)
  }
}
