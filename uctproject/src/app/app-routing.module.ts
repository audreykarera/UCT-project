import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';
import { RegisterComponent } from './dialogs/register/register.component';
import { StudentCoursesComponent } from './student/student-courses/student-courses/student-courses.component';
import { StudentProfileComponent } from './student/student-homepage/student-profile/student-profile.component';
import { StudentReportsComponent } from './student/student-reports/student-reports/student-reports.component';

const routes: Routes = [
  //General Urls
  {path: '', redirectTo: 'static-page', pathMatch: 'full'},
  {path:'static-page', component: AppComponent},
  {path:'login', component: LoginDialogComponent},
  {path:'register', component: RegisterComponent},
  //Student URLs
  {path:'profile', component: StudentProfileComponent},
  {path:'student-reports', component: StudentReportsComponent}, 
  {path:'student-courses', component: StudentCoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
