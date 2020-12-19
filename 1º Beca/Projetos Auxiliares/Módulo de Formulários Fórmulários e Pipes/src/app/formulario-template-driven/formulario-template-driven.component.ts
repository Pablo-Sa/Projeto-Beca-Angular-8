import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario-template-driven',
  templateUrl: './formulario-template-driven.component.html',
  styleUrls: ['./formulario-template-driven.component.css']
})
export class FormularioTemplateDrivenComponent implements OnInit {

  usuario:any = {
    nome: null,
    email: null
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const variavel = this.http.get('fsdfsf');
    
  }



  onSubmit(formulario){
    console.log(formulario)
    console.log(formulario.value)
    this.http.post('https://httpbin.org/post', formulario.value).subscribe(
      sucess =>{
        console.log(sucess)
        formulario.form.reset();
      },
      error =>{},
      ()=>{})
  }

}
