import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wellcome to my project3';
  students = ['Suraj','Raj','Uday','Sandeep']
  faculty = ['Suraj12','Raj12','Uday12','Sandeep12']
  courses = ['Angular','Python','JavaScript','Mysql']
}
