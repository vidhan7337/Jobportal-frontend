import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  baseUrl = 'https://localhost:44361/gateway/vacancies'
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8', 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }) };
  constructor(private httpClient: HttpClient) { }


  //add new vacancy
  public addvacancy(PublishedBy: string, PublishedDate: string, NoofVacancies: number, MinimumQualification: string, JobDescription: string, ExperienceRequired: number, LastDate: string, minsalary: number, maxsalar: number) {
    const a = {


      publishedBy: PublishedBy,
      publishedDate: PublishedDate,
      noOfVacancies: NoofVacancies,
      minimumQualification: MinimumQualification,
      jobDescription: JobDescription,
      lastDate: LastDate,
      experienceRequired: ExperienceRequired,
      minSalary: minsalary,
      maxSalary: maxsalar

    }

    const body = JSON.stringify(a);
    console.log(body)
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }) };


    return this.httpClient.post<any>(this.baseUrl, body, this.httpOptions);
  }

  //get all submitted vacancies by employer
  public getsubmittedvacancy(org: string, page: number, sortby: string, minsalary: number, maxsalary: number) {

    return this.httpClient.get<Vacancy>(this.baseUrl + "/submitted/" + org, {
      headers: { 'Content-Type': 'application/json; charset=UTF-8', 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }, params: {
        page: page,
        sortby: sortby,
        minsalary: minsalary,
        maxsalary: maxsalary
      },
    });

  }


  //delete a vacancy
  public deletevacancy(id: number) {
    return this.httpClient.delete(this.baseUrl + "/" + id, this.httpOptions);
  }

  //update vacancy
  public updatevacancy(id: number, PublishedBy: string, PublishedDate: string, NoofVacancies: number, MinimumQualification: string, JobDescription: string, ExperienceRequired: number, LastDate: string, minsalary: number, maxsalar: number) {
    const a = {

      id: id,
      publishedBy: PublishedBy,
      publishedDate: PublishedDate,
      noOfVacancies: NoofVacancies,
      minimumQualification: MinimumQualification,
      jobDescription: JobDescription,
      lastDate: LastDate,
      experienceRequired: ExperienceRequired,
      minSalary: minsalary,
      maxSalary: maxsalar

    }
    const body = JSON.stringify(a);
    console.log(body)
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }) };


    return this.httpClient.put<any>(this.baseUrl + "/" + id, body, this.httpOptions);
  }

  //get single vacancy details
  public getvacancydetail(id: number) {
    return this.httpClient.get(this.baseUrl + "/" + id, this.httpOptions);
  }


  //get all vacancy details
  public getallvacancies(search: string, page: number, sortby: string, minsalary: number, maxsalary: number) {
    return this.httpClient.get(this.baseUrl, {
      headers: { 'Content-Type': 'application/json; charset=UTF-8', 'Authorization': 'Bearer ' + window.localStorage.getItem('token') }, params: {
        search: search,
        page: page,
        sortby: sortby,
        minsalary: minsalary,
        maxsalary: maxsalary
      },
    });
  }


  //apply for vacancy by jobseeker
  public applyvacancy(vacid: number, userid: number, date: string) {
    const a = {
      vacancyId: vacid,
      userId: userid,
      appliedDate: date

    }

    const body = JSON.stringify(a);
    console.log(body)
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }) };


    return this.httpClient.post<any>('https://localhost:44361/gateway/vacancyrequest', body, this.httpOptions);
  }


  //vacancies id applied by jobseeker
  public appliedvacancies(userid: number) {
    return this.httpClient.get('https://localhost:44361/gateway/vacancyapplied/' + userid, this.httpOptions);
  }

  //jobseeker id applied for particular vacancies
  public appliedusers(vacid: number) {
    return this.httpClient.get('https://localhost:44361/gateway/vacancyrequest/' + vacid, this.httpOptions);
  }
}
