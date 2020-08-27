import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-curso-formulario',
  templateUrl: './curso-formulario.component.html',
  styleUrls: ['./curso-formulario.component.css'],
  preserveWhitespaces: true
})
export class CursoFormularioComponent implements OnInit {

  formulario: FormGroup;
  formSubmitted: boolean = false;
  hasErrorDetected: boolean = false;

  constructor(private http: CursoService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {

    this.formulario = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      palestrante: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      carga: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  onSubmit(){
    
    this.formSubmitted = true;
    console.log(this.formulario.value)

    if(this.formulario.valid){
      console.log(this.formulario.value)
      this.http.create(this.formulario.value)
      .subscribe(
        response => {
          console.log(`Request Concluído, Resposta do Servidor: ${response}`)
          alert('Curso Adicionado com Sucesso.')
          this.location.back()
        } ,
        error => {
          console.log(`Request Concluído, Resposta do Servidor: ${error.message}`)
          if(error.status == '403'){
            alert('Seção Expirada');
            this.router.navigate(['']); 
           }
        },
        () =>  console.log('Request Concluído, Curso Salvo')
      )
      console.log('Submitted');
      this.formulario.reset();
      this.formSubmitted = false;
    }
  
  }

  onCancel(){
    this.formSubmitted = false;
    this.location.back();
    this.formulario.reset();
    console.log('onCancel');
  }

  hasError(field:string){

    if(this.formulario.controls[field].invalid){
      this.hasErrorDetected = true;
      return this.hasErrorDetected
    }
  }

}
