//Angular 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

//Components
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';

import { AppComponent } from './app.component';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './dialogs/register/register.component';
import { AdminComponent } from './admin/admin/admin.component';
import { StudentProfileComponent } from './student/student-homepage/student-profile/student-profile.component';
import { StudentReportsComponent } from './student/student-reports/student-reports/student-reports.component';
import { StudentCoursesComponent } from './student/student-courses/student-courses/student-courses.component';

const angularMaterials = [
  MatToolbarModule,
  MatIconModule,
  MatDialogModule, 
  MatButtonModule, 
  MatInputModule,
  MatCardModule
]

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    RegisterComponent,
    AdminComponent,
    StudentProfileComponent,
    StudentReportsComponent,
    StudentCoursesComponent
  ],
  imports: [
    ...angularMaterials,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
