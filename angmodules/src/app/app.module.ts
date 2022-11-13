import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student/student.component';

const routes: Routes = [
  {
      path: '',
      component: StudentComponent
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,StudentModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
