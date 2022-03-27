import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobseekerService {
  baseUrl='https://localhost:44361/gateway/'
  
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8','Authorization':'Bearer '+window.localStorage.getItem('token') }) };
  constructor(private httpClient: HttpClient) { }

  public getjobseekerprofile() {
    let email = window.localStorage.getItem('email');
    return this.httpClient.get<any>(this.baseUrl+"jobseeker/getbyemail/" + email,this.httpOptions);
  }

  public addjobseekerprofile(first: string, last: string, phone: string, address: string, totalexperience: number, expectedsalary: number, dateodbirth: string) {
    const a = {
      firstName: first,
      lastName: last,
      email: window.localStorage.getItem('email'),
      phone: phone.toString(),
      address: address,
      totalExperience: totalexperience,
      expectedSalary: expectedsalary,
      dateOfBirth: dateodbirth
    }
    const body = JSON.stringify(a);
    console.log(body)


    return this.httpClient.post<any>(this.baseUrl+"jobseeker", body, this.httpOptions)
  }

  public updatejobseekerprofile(id:number,first: string, last: string, phone: string, address: string, totalexperience: number, expectedsalary: number, dateodbirth: string){
    const a = {
      firstName: first,
      lastName: last,
      email: window.localStorage.getItem('email'),
      phone: phone.toString(),
      address: address,
      totalExperience: totalexperience,
      expectedSalary: expectedsalary,
      dateOfBirth: dateodbirth
    }
    const body = JSON.stringify(a);
    console.log(body)
   


    return this.httpClient.put<any>(this.baseUrl+"jobseeker/"+id, body, this.httpOptions)
  }

  public addqualification(qualification: string, university: string, yearofcompletion: string, gradeorscore: string) {
    const a = {
      userId: Number(window.localStorage.getItem('userid')),
      qualificationName: qualification,
      university: university,
      yearOfCompletion: yearofcompletion,
      gradeOrScore: gradeorscore
    }
    const body = JSON.stringify(a);
    console.log(body)
    


    return this.httpClient.post<any>(this.baseUrl+"qualification", body, this.httpOptions)


  }

  public addexperience(companyname: string, start: string, end: string, companyurl: string, designation: string, jobdescription: string) {

    const a = {
      userId: Number(window.localStorage.getItem('userid')),
      companyName: companyname,
      startYear: start,
      endYear: end,
      comapanyUrl: companyurl,
      designation: designation,
      jobDescription: jobdescription
    }
    const body = JSON.stringify(a);
    console.log(body)
   


    return this.httpClient.post<any>(this.baseUrl+"userexperince", body, this.httpOptions)

  }

  public getjobseekerprofileforshow(id:number){
    return this.httpClient.get<any>(this.baseUrl+"jobseeker/"+id,this.httpOptions);
  }
  public getallqualifications(id:number){
    return this.httpClient.get<any>(this.baseUrl+"qualification/all/"+ id,this.httpOptions);
  }
  public getallexperience(id:number){
    return this.httpClient.get<any>(this.baseUrl+"userexperince/all/"+ id,this.httpOptions);
  }

  public getsinglequalification(id:number){
    return this.httpClient.get<any>(this.baseUrl+"qualification/" + id,this.httpOptions);
  }
  public getsingleexperience(id:number){
  return this.httpClient.get<any>(this.baseUrl+"userexperince/" + id,this.httpOptions);
  }

  public updatequalification(id:number,qualification: string, university: string, yearofcompletion: string, gradeorscore: string){
    const a = {
      userId: Number(window.localStorage.getItem('userid')),
      qualificationName: qualification,
      university: university,
      yearOfCompletion: yearofcompletion,
      gradeOrScore: gradeorscore
    }
    const body = JSON.stringify(a);
    console.log(body)
    


    return this.httpClient.put<any>(this.baseUrl+"qualification/" + id, body, this.httpOptions)
  }
  public updateexperience(id:number,companyname: string, start: string, end: string, companyurl: string, designation: string, jobdescription: string){
    const a = {
      userId: Number(window.localStorage.getItem('userid')),
      companyName: companyname,
      startYear: start,
      endYear: end,
      comapanyUrl: companyurl,
      designation: designation,
      jobDescription: jobdescription
    }
    const body = JSON.stringify(a);
    console.log(body)

    return this.httpClient.put<any>(this.baseUrl+"userexperince/" + id, body, this.httpOptions)
  }

  public deleteexperience(id:number){
    return this.httpClient.delete<any>(this.baseUrl+"userexperince/" + id,this.httpOptions)
  }
  public deletequalification(id:number){
    return this.httpClient.delete<any>(this.baseUrl+"qualification/" + id,this.httpOptions)
  }
}
