import { Component } from '@angular/core';
import { outputparam } from './buttonchange/buttonchange.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: hello-world';

  flagsForView = {
    isClicked : false
  }
  buttonChangeClicked(returnedvalue:outputparam)
  {
    console.log("called method in app.component: Interface used=" + returnedvalue.interfaceused + ' datastring='+ returnedvalue.valuename);
  }
  
  tweet = {
    likesCount :10,
    isLiked : false
  }

  clickForFun(myreturnedValue : string)
  {
    console.log("fun in app" + myreturnedValue);
  }
}

