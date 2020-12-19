import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'examplo-view-child',
  templateUrl: './examplo-view-child.component.html',
  styleUrls: ['./examplo-view-child.component.css'],
  preserveWhitespaces: true
})
export class ExamploViewChildComponent implements OnInit {


  // @ViewChild('campoInput', {static:false}) campoInput: HTMLElement;
  @ViewChild('campoInput', {static:false}) campoInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  verificar(){
    console.log(this.campoInput.nativeElement.value);
  }

}
