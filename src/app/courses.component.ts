//to include angular
import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

//@Component is adecorator provided by Angular takes an argument
@Component({
  selector: 'courses',
  template: `
    <h2>{{"Tittle :" + title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
    `
})
export class CoursesComponent {
  title = "List of new Courses";
  courses;
  //Angular will automatically instanciate the service calss
  //dependency injection providing dependency of a class into its constructor
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
