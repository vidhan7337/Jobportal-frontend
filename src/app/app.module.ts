import { BrowserModule } from '@angular/platform-browser';
/* Routing */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";
/* Components */

import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangepasswordComponent } from './components/authentication/changepassword/changepassword.component';
import { AddvacancyComponent } from './components/vacancy/addvacancy/addvacancy.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { AddemployerprofileComponent } from './components/employer/addemployerprofile/addemployerprofile.component';
import { EmployerprofileComponent } from './components/employer/employerprofile/employerprofile.component';
import { LogInComponent } from './components/authentication/log-in/log-in.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { UpdateemployerprofileComponent } from './components/employer/updateemployerprofile/updateemployerprofile.component';
import { DatePipe } from '@angular/common';
import { VacancysubmittedComponent } from './components/vacancy/vacancysubmitted/vacancysubmitted.component';
import { UpdatevacancyComponent } from './components/vacancy/updatevacancy/updatevacancy.component';
import { ShowvacancyComponent } from './components/vacancy/showvacancy/showvacancy.component';
import { AddprofilejobseekerComponent } from './components/jobseeker/addprofilejobseeker/addprofilejobseeker.component';
import { UpdateprofilejobseekerComponent } from './components/jobseeker/updateprofilejobseeker/updateprofilejobseeker.component';
import { UpdatequalificationjobseekerComponent } from './components/jobseeker/updatequalificationjobseeker/updatequalificationjobseeker.component';
import { AddqualificationjobseekerComponent } from './components/jobseeker/addqualificationjobseeker/addqualificationjobseeker.component';
import { AddexperiencejobseekerComponent } from './components/jobseeker/addexperiencejobseeker/addexperiencejobseeker.component';
import { UpdateexperiencejobseekerComponent } from './components/jobseeker/updateexperiencejobseeker/updateexperiencejobseeker.component';
import { ShowprofilejobseekerComponent } from './components/jobseeker/showprofilejobseeker/showprofilejobseeker.component';
import { ViewcompanyprofiletojobseekerComponent } from './components/jobseeker/viewcompanyprofiletojobseeker/viewcompanyprofiletojobseeker.component';
import { ViewjobseekerprofiletoemployerComponent } from './components/employer/viewjobseekerprofiletoemployer/viewjobseekerprofiletoemployer.component';
import { ViewvacancyrequetsComponent } from './components/employer/viewvacancyrequets/viewvacancyrequets.component';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent,

    DashboardComponent,
    ChangepasswordComponent,
    AddvacancyComponent,
    AddemployerprofileComponent,
    EmployerprofileComponent,
    UpdateemployerprofileComponent,
    VacancysubmittedComponent,
    UpdatevacancyComponent,
    ShowvacancyComponent,
    AddprofilejobseekerComponent,
    UpdateprofilejobseekerComponent,
    UpdatequalificationjobseekerComponent,
    AddqualificationjobseekerComponent,
    AddexperiencejobseekerComponent,
    UpdateexperiencejobseekerComponent,
    ShowprofilejobseekerComponent,
    ViewcompanyprofiletojobseekerComponent,
    ViewjobseekerprofiletoemployerComponent,
    ViewvacancyrequetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    SliderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule

  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }