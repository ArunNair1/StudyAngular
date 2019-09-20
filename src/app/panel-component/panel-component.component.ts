import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel-component',
  templateUrl: './panel-component.component.html',
  styleUrls: ['./panel-component.component.css']
})
export class PanelComponentComponent implements OnInit {

  @Input('count') count:number;
  @Input('isActivated') isActive: boolean;
  
  @Output('funClick') click = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  likeClick()
  {
    this.isActive=(this.isActive)?false:true;
    console.log("arun clicked"+this.isActive);
    (this.isActive)?this.count--:this.count++;
    this.click.emit(" this is the output property implemented for fun");
  }

}
