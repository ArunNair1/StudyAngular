import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appArunCustomDirective]'
})
export class ArunCustomDirectiveDirective {

  constructor() { }

  @HostListener('focus') onFocus()
  {
    console.log("focus method initiator");
  }
  @HostListener('blur') onBlur()
  {
    console.log("blur method initiator");
  }
}
