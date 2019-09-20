import { Component } from '@angular/core';
import { coursesService } from './courses.service';
@Component(
    {
        selector:'courses',
        template:`<h2>Course Component Content</h2><p>{{ "first attempt : "+second_title }}</p>
        <p>{{ "using function => " + getTitle() }}</p>
        <button class="btn btn-primary" (click)="onClickDiv()">Submit button</button>
        <br/>
        <div (click)="onClickDiv()">
        <button [class.btn-primary]="isActive" (click)="onClickButton($event)">SAve button</button>
        </div>
        <br/>
        <button [style.color]="isActive2 ? 'red' : 'green'">Ok button</button>
        
        <ul>
        below displaying list using interpolation
            <li *ngFor="let course of courses">
            {{ course }}
            </li>
        </ul>
        
        
        <input type="text" (keyup)="keyupMethod1($event)"/>

        <input type="text" (keyup)="keyupMethod()"/>
        
        <input type="text" #email (keyup.enter)="keyupMethod(email.value)" placeholder="#email"/>

        <input type="text" placeholder="Two way binding" [(ngModel)]="two_Way_mail" (keyup.enter)="twowaymethod()"/>


       
        `


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