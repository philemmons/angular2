import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//NEW
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component'; 
// auto filled when class is included to declaration

@NgModule({
  declarations: [ 
    // this is where you add all the components for 
    // this part of the module
    // install auto import by steoates from extensions & restart vs code
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
