import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { coursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorServicesService } from './author-services.service';
import { Summary } from './custompipe/summary.pipe';
import { ButtonchangeComponent } from './buttonchange/buttonchange.component';
import { CustomPipeAssignPipe } from './custompipe/custom-pipe-assign.pipe';
import { PanelComponentComponent } from './panel-component/panel-component.component';
import { DirectiveComponentComponent } from './directive-component/directive-component.component';
import { ArunCustomDirectiveDirective } from './arun-custom-directive.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { MyformComponent } from './myform/myform.component';
import { PostsComponent } from './posts/posts.component';
import { from } from 'rxjs';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    Summary,
    ButtonchangeComponent,
    CustomPipeAssignPipe,
    PanelComponentComponent,
    DirectiveComponentComponent,
    ArunCustomDirectiveDirective,
    ZippyComponent,
    MyformComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    coursesService,
    AuthorServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
