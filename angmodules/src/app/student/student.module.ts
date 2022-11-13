import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentComponent,
    StudentListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
