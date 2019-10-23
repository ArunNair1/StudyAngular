import { Component } from '@angular/core';
import { coursesService } from './courses.service';
@Component(
    {
        selector:'courses',
        template:`<h2>Course Component Content</h2>`


    }
)
export class CoursesComponent
{
    two_Way_mail="two way";

    twowaymethod()
    {
        console.log("enetered value using two way binding is: "+this.two_Way_mail);
    }
    keyupMethod(email)
    {
        console.log("enetered value using template variable is: "+email);
    }
    keyupMethod1($event)
    {
        console.log($event.target.value);
    }
    onClickDiv()
    {
        console.log("clicking div");
    }
    
    onClickButton($event)
    {
        $event.stopPropagation();
        console.log("clicking button");
    }
   second_title="test title";

   courses;

   isActive=true;
   isActive2=false;
    constructor(service:coursesService)
    {
        //let service = new coursesService();
        this.courses=service.getCourses();
    }
   getTitle()
   {    
        return this.second_title;
    }
}