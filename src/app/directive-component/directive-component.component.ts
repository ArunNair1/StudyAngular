import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  templateUrl: './directive-component.component.html',
  styleUrls: ['./directive-component.component.css']
})
export class DirectiveComponentComponent implements OnInit {

  myArray = [1,2,3];
   dataListForLoop =[{id:1,name:"test01"},{id:2,name:"test02"},{id:3,name:"test03"},{id:4,name:"test04"}];
  trackIt(index, dat)
  {
    return dat? dat.id:undefined;
  }
   constructor() { }

  ngOnInit() {
  }

}
