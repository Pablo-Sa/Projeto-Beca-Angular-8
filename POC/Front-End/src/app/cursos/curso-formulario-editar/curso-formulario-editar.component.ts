import { CursoService } from './../curso.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../cursoModel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-curso-formulario-editar',
  templateUrl: './curso-formulario-editar.component.html',
  styleUrls: ['./curso-formulario-editar.component.css'],
  preserveWhitespaces: true
})
export class CursoFormularioEditarComponent implements OnInit {

  formulario: FormGroup;
  formSubmitted: boolean = false;

  constructor(private http: CursoService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router
              ) { }

  ngOnInit() {

    // this.route.params.subscribe(
    //   params =>{
    //     const id = params.id;
    //     console.log(id);
    //     this.cursoService.getById(id).subscribe(
    //       (curso: Curso) =>  {
    //         this.updateFormulario(curso);
    //       }  
    //     );
    //   }
    // );

    this.route.params
    .pipe(
      map(params => params.id),
      switchMap(id => this.http.getById(id)
      )
    )    
    .subscribe(
      curso => this.updateFormulario(curso),
      error=> {
        if(error.status == '403'){
          alert('Seção Expirada');
          this.router.navigate(['']); 
         }
      }
    );

    this.formulario = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      palestrante: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      carga: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      alunos: new FormControl(null)
    })
  }

  onSubmit(){
    
    this.formSubmitted = true;
    console.log(this.formulario.value);
    //console.log(this.formulario.valid);
    //console.log(this.formulario.controls['nome'].valid);

    if(this.formulario.valid){
      this.http.updateCurso(this.formulario.value)
      .subscribe(
        response => {
          console.log(`Request Concluído, Resposta do Servidor: ${response}`)
          alert('Curso Atualizado com Sucesso.')
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
    this.formulario.reset();
    console.log('onCancel');
    this.location.back();
  }

  hasError(field:string){
    return this.formulario.controls[field].invalid;
  }

  updateFormulario(curso: Curso){
    this.formulario.patchValue({
      id: curso.id,
      nome: curso.nome,
      palestrante: curso.palestrante,
      carga: curso.carga,
      alunos: curso.alunos
    });
  }
}
