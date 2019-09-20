import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmitterVisitorContext } from '@angular/compiler';


@Component({
  selector: 'app-buttonchange',
  templateUrl: './buttonchange.component.html',
  styleUrls: ['./buttonchange.component.css']
})
export class ButtonchangeComponent implements OnInit {
  
  @Input('is-clicked') isClicked=true;

  @Output() change = new EventEmitter();

  sentence;
  clickButtonToChangeColor()
  {
    console.log("clicked inside buttonchange.component");
    this.isClicked = (this.isClicked) ? false:true;
    this.change.emit({valuename: "passed data from button component", interfaceused : true});  
  }

  changeCase()
  {
    console.log(this.sentence);
  }
  constructor() { }

  ngOnInit() {
  }

}

export interface outputparam
{
  valuename:string,
  interfaceused:boolean
}