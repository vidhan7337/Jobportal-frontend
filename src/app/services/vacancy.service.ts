import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  baseUrl='https://localhost:44361/gateway/vacancies'
  constructor(private httpClient: HttpClient) { }

  public addvacancy(PublishedBy:string,PublishedDate:string,NoofVacancies:number,MinimumQualification:string,JobDescription:string,ExperienceRequired:number,LastDate:string,minsalary:number,maxsalar:number) {
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
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }) };


    return this.httpClient.post<any>(this.baseUrl, body, httpOptions);
  }

  public getsubmittedvacancy(org:string){

    return this.httpClient.get<Vacancy>(this.baseUrl+"/submitted/"+org);

  }

  public deletevacancy(id:number){
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
  public updatevacancy(id:number,PublishedBy:string,PublishedDate:string,NoofVacancies:number,MinimumQualification:string,JobDescription:string,ExperienceRequired:number,LastDate:string,minsalary:number,maxsalar:number){
    const a = {
      
      id:id,
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
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }) };


    return this.httpClient.put<any>(this.baseUrl+"/"+id, body, httpOptions);
  }

  public getvacancydetail(id:number){
    return this.httpClient.get(this.baseUrl+"/"+id);
  }

}
