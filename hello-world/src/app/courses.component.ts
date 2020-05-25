import { CoursesServices } from './courses.service';

import{ Component } from '@angular/core';

// ****** TypeDecorator
@Component({
// <div class="courses>"   ".courses" basic CSS; id, change to #
    selector: 'courses',
    // any simple JS expression in the {{}} 
    // ***** string interpolation
    // eg "Title: " + title
    // template: '<h2>{{ getTitle() }}</h2>'

    // change single quote to backtick ``
    // the backtick allows us to break up the line for readability
    // ******** directives are used to manipulate the DOM
    // prefix with asterisk *

    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
}) 
export class CoursesComponent{ //Pascal naming convention
    title = '3 Authors';
    // ********  DATA BINDING at runtime and update the DOM
    // binding our view to a field in this component

    // we can unit test this class without dependancy
    // on that HTTP endpoint
    courses;

    // ****  DEPENDENCY INJECTION
    constructor(service: CoursesServices){
        // creating this class here tightly coupled
        // this component to the service and prevents us 
        // from unit testing this class
        // also any changes to the parameter must be made 
        // manually for every instance in our code.

        //let service = new CoursesServices();

        // solution: we add the instanciation directly to the parameter
        // also, it decouples the class from the implemntation.

        // service: CoursesServices must be injected into its constructor
        // Angular has a built in framework

        this.courses = service.getCourses();

    }  

    getTitle(){
        return this.title;
    }

    // Logic for calling an HTTP service
    // Component tightly couple HTTP endpoint
    // so we create a fake HTTP endpoint
    // should contain only the presentation logic
    // ******* SERVICES
}