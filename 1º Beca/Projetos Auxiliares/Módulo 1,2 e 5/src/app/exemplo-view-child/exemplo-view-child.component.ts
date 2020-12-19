import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'exemplo-view-child',
  templateUrl: './exemplo-view-child.component.html',
  styleUrls: ['./exemplo-view-child.component.css']
})
export class ExemploViewChildComponent implements OnInit {

  @ViewChild('campoInput',{static: false}) valorInput:ElementRef;

  constructor() {
   
   }

  ngOnInit() {
  }

  verificar(){
    console.log(this.valorInput.nativeElement.value);
  }
}
