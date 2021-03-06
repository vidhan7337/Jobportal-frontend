import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-showvacancy',
  templateUrl: './showvacancy.component.html',
  styleUrls: ['./showvacancy.component.css']
})
export class ShowvacancyComponent implements OnInit {
  employer: any;
  loading: boolean = false;
  vacancyList: any = [];
  data: any = []
  page: number = 1;
  pagesize: number = 5;
  totalRecords!: number;
  totalPage!: number;
  vacancyid: any = [];
  date = new Date();
  search: string = '';
  radio: string = "default";
  minsalary: number = 0;
  maxsalary: number = 100000;
  constructor(private vacancyService: VacancyService, public datepipe: DatePipe, private toastr: ToastrService,private modalService: NgbModal,private empService:EmployerService) { }

  ngOnInit(): void {
    this.loading = true;
    // showing all vacancies
    this.vacancyService.getallvacancies(this.search, this.page, this.radio, this.minsalary, this.maxsalary).subscribe((data) => {
      this.data = data
      this.vacancyList = this.data.vacancyDetails
      this.totalRecords = this.data.totalItems
      this.totalPage = this.data.totalPage
      console.log(this.vacancyList)
      this.loading = false;
    }, (error) => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        console.log(error)
      }
    });
    let userid = window.localStorage.getItem('userid');
    this.vacancyService.appliedvacancies(Number(userid)).subscribe((data) => {
      this.vacancyid = data;
      window.localStorage.setItem("vacacncyid", JSON.stringify(this.vacancyid))
    })


  }

  //next page
  next() {

    if (this.page == this.totalPage) {
      this.ngOnInit();
    } else {
      this.page = this.page + 1;
      this.ngOnInit();
    }

  }
  //previous page
  previous() {
    if (this.page == 1) {
      this.ngOnInit();
    } else {
      this.page = this.page - 1;
      this.ngOnInit();
    }
  }
  //direct to first page
  firstpage() {
    this.page = 1;
    this.ngOnInit();
  }
  //direct to last page
  lastpage() {
    this.page = this.totalPage;
    this.ngOnInit();
  }

  //apply for particular vacancy
  applyforvacancy(vacid: number) {
    this.loading = true;
    let userid = window.localStorage.getItem('userid');
    let x = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.vacancyService.applyvacancy(
      vacid,
      Number(userid),
      x == null ? "null" : x
    ).subscribe((data) => {
      console.log("response", data);
      this.loading = false;
      this.ngOnInit();
      this.toastr.info("Vacancy applied")
    }, error => {
      if (error.status == 401) {
        this.toastr.error("Session expired login again")
      }
      else {
        this.loading = false;
        console.log("error", error)
        this.toastr.warning("Something went wrong")
      }
    })
  }


  //showing profile of employer to jobseeker
  showcompanyprofile(content: any,org:string){
    console.log(org)
    this.empService.getemployerbyname(org).subscribe((data) => {
      this.employer = data
     console.log(this.employer)
    })
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }


}
