import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Vacancy } from 'src/app/models/vacancy';
import { EmployerService } from 'src/app/services/employer.service';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-vacancysubmitted',
  templateUrl: './vacancysubmitted.component.html',
  styleUrls: ['./vacancysubmitted.component.css']
})
export class VacancysubmittedComponent implements OnInit {
  vacancyList: any = [];
  first = 0;
  rows = 10;
  employer: any;
  constructor(private vacancyService: VacancyService, private empService: EmployerService) {


  }

  ngOnInit(): void {
    this.empService.getemployer().subscribe((data) => {

      console.log(data)
      this.employer = data
    }, error => {


    });

    this.vacancyService.getsubmittedvacancy('websol').subscribe((data) => {
      this.vacancyList = data
      console.log(this.vacancyList)
    }, (error) => {
      console.log(error)
    });
  }
  next() {
    this.first = this.first + this.rows;
}
prev() {
    this.first = this.first - this.rows;
}
reset() {
    this.first = 0;
}
isLastPage(): boolean {
    return this.vacancyList ? this.first === (this.vacancyList.length - this.rows) : true;
}
isFirstPage(): boolean {
    return this.vacancyList ? this.first === 0 : true;
}
remove(id: number) {
 
  this.vacancyService.deletevacancy(id).subscribe((error)=>{
    console.log(error)
  });
  
  this.vacancyService.getsubmittedvacancy('websol').subscribe((data) => {
    this.vacancyList = data
    console.log(this.vacancyList)
  }, (error) => {
    console.log(error)
  });
}

}
