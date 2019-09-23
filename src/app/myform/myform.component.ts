import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  categories=[{id:1,name:"arun"}]
  formSubmit(formValues)
  {
    console.log(formValues);
    
  }
  constructor() { }

  ngOnInit() {
  }

}
