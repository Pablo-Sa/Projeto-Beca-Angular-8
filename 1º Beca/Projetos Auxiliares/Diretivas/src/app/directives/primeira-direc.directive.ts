import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPrimeiraDirec]'
})
export class PrimeiraDirecDirective {

  @Input("appPrimeiraDirec") primeiroDirec;
  @Input("color1") color1;
  @Input("color2") color2;

  constructor() { }

  @HostListener('click') click = () => {
    this.size = this.primeiroDirec;
  };

  @HostListener('mouseenter') onMouseEnter = () =>{
    this.color = this.color1;
  }    

  @HostListener('mouseleave') onMouseOut = () =>{
    this.color = this.color2;
  }  

  @HostBinding('style.font-size') size:any;
  @HostBinding('style.color') color:any;
}
