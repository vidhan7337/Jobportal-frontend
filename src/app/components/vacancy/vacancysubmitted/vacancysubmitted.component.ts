import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

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
  data: any = []
  page: number = 1;
  pagesize: number = 5;
  totalRecords!: number;
  totalPage!: number;
  employer: any;
  x: string;
  radio: string = "default";
  minsalary: number = 0;
  maxsalary: number = 100000;
  loading = false;
  closeResult = '';
  constructor(private vacancyService: VacancyService, private empService: EmployerService, private toastr: ToastrService, private modalService: NgbModal) {

    this.x = String(window.localStorage.getItem("org"))
  }

  ngOnInit(): void {
    this.loading = true
    this.empService.getemployer().subscribe((data) => {

      console.log(data)
      this.employer = data
      this.loading = false
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        this.loading = false
        this.toastr.warning("Data not available")
      }
    });

    this.vacancyService.getsubmittedvacancy(this.x, this.page, this.radio, this.minsalary, this.maxsalary).subscribe((data) => {
      this.loading = true
      this.data = data
      this.vacancyList = this.data.vacancyDetails
      this.totalRecords = this.data.totalItems
      this.totalPage = this.data.totalPage
      console.log(this.vacancyList)
      this.loading = false
    }, (error) => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        this.toastr.warning("No vacancies submitted")
        console.log(error)
        this.loading = false
      }
    });
  }

  next() {
    this.loading = true
    if (this.page == this.totalPage) {
      this.ngOnInit();
    } else {
      this.page = this.page + 1;
      this.ngOnInit();
    }
    this.loading = false
  }

  previous() {
    this.loading = true
    if (this.page == 1) {
      this.ngOnInit();
    } else {
      this.page = this.page - 1;
      this.ngOnInit();
    }
    this.loading = false
  }
  firstpage() {
    this.loading = true
    this.page = 1;
    this.ngOnInit();
    this.loading = false
  }
  lastpage() {
    this.loading = true
    this.page = this.totalPage;
    this.ngOnInit();
    this.loading = false
  }
  //popup
  open(content: any, id: number) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

      this.remove(id);
    }, (reason) => {
      // this.remove(id);

    });
  }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  // next() {
  //   this.first = this.first + this.rows;
  // }
  // prev() {
  //   this.first = this.first - this.rows;
  // }
  // reset() {
  //   this.first = 0;
  // }
  // isLastPage(): boolean {
  //   return this.data.totalItems ? this.first === (this.data.totalItems - this.rows) : true;
  // }
  // isFirstPage(): boolean {
  //   return this.data.totalItems ? this.first === 0 : true;
  // }
  remove(id: number) {
    // if (confirm("Are you sure you want to delete") == true) 
    // {
    this.vacancyService.deletevacancy(id).subscribe((error) => {
      console.log(error)
      this.toastr.warning("Vacancy deleted")
      this.ngOnInit()
    });
    //}
  }



}
