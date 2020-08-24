import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDirectiveCustom]'
})
export class DirectiveCustomDirective {

  @Input('appDirectiveCustom') color1;
  @Input('defaultColor') color2;

  constructor() { }

  @HostListener('mouseenter') onMouseEnter(){
    this.backgroundColor = this.color1;
  }    

  @HostListener('mouseleave') onMouseOut(){
    this.backgroundColor = this.color2;
  }  

  @HostBinding('style.backgroundColor') backgroundColor: string;

}
