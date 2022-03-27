import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangepasswordComponent } from './components/authentication/changepassword/changepassword.component';
import { AddvacancyComponent } from './components/vacancy/addvacancy/addvacancy.component';
import { AddemployerprofileComponent } from './components/employer/addemployerprofile/addemployerprofile.component';
import { LogInComponent } from './components/authentication/log-in/log-in.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { EmployerprofileComponent } from './components/employer/employerprofile/employerprofile.component';
import { UpdateemployerprofileComponent } from './components/employer/updateemployerprofile/updateemployerprofile.component';
import { UpdatevacancyComponent } from './components/vacancy/updatevacancy/updatevacancy.component';
import { ShowprofilejobseekerComponent } from './components/jobseeker/showprofilejobseeker/showprofilejobseeker.component';
import { AddqualificationjobseekerComponent } from './components/jobseeker/addqualificationjobseeker/addqualificationjobseeker.component';
import { AddexperiencejobseekerComponent } from './components/jobseeker/addexperiencejobseeker/addexperiencejobseeker.component';
import { UpdateprofilejobseekerComponent } from './components/jobseeker/updateprofilejobseeker/updateprofilejobseeker.component';
import { UpdatequalificationjobseekerComponent } from './components/jobseeker/updatequalificationjobseeker/updatequalificationjobseeker.component';
import { UpdateexperiencejobseekerComponent } from './components/jobseeker/updateexperiencejobseeker/updateexperiencejobseeker.component';
import { ViewcompanyprofiletojobseekerComponent } from './components/jobseeker/viewcompanyprofiletojobseeker/viewcompanyprofiletojobseeker.component';
import { ViewvacancyrequetsComponent } from './components/employer/viewvacancyrequets/viewvacancyrequets.component';
import { ViewjobseekerprofiletoemployerComponent } from './components/employer/viewjobseekerprofiletoemployer/viewjobseekerprofiletoemployer.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  {path: 'addvacancy', component: AddvacancyComponent},
  {path: 'addemployerprofile', component: AddemployerprofileComponent},
  {path: 'employerprofile', component: EmployerprofileComponent},
  {path:'updateemployerprofile',component:UpdateemployerprofileComponent},
  {path:'updatevacancy/:id',component:UpdatevacancyComponent},
  {path:'jobseekerprofile',component:ShowprofilejobseekerComponent},
  {path:'addqualification',component:AddqualificationjobseekerComponent},
  {path:'addexperince',component:AddexperiencejobseekerComponent},
  {path:'updatejobseekerprofile',component:UpdateprofilejobseekerComponent},
  {path:'updatequalification/:id',component:UpdatequalificationjobseekerComponent},
  {path:'updateexperience/:id',component:UpdateexperiencejobseekerComponent},
  {path:'viewcompanytojobseeker/:org',component:ViewcompanyprofiletojobseekerComponent},
  {path:'viewvacancyrequests/:vacid',component:ViewvacancyrequetsComponent},
  {path:'viewjobseekertoemployer/:userid',component:ViewjobseekerprofiletoemployerComponent}
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
