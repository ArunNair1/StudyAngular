import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('title') title :string;
isVisible:boolean;
toggleMethod(){
this.isVisible = !this.isVisible;
console.log("test"+this.isVisible);
}
  constructor() {   }

  ngOnInit() {
  }

}
