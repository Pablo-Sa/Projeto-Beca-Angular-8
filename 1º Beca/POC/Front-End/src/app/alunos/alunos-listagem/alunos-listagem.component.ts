import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CursoService } from 'src/app/cursos/curso.service';
import { Curso } from 'src/app/cursos/cursoModel';
import { map, tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos-listagem',
  templateUrl: './alunos-listagem.component.html',
  styleUrls: ['./alunos-listagem.component.css'],
  preserveWhitespaces: true
})
export class AlunosListagemComponent implements OnInit{

  formulario: FormGroup;
  formSubmitted: boolean = false;
  cursos: Curso[];
  hasErrorDetected: boolean = false;

  constructor(private http: CursoService,
              private router: Router,
              private location: Location
              ) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      aluno: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      curso: new FormControl(null, Validators.required)
    })

   this.http.getList()
    .subscribe(cursosList => this.cursos = cursosList)
  }

  onSubmit(){
    console.log(this.formulario.value)
    this.formSubmitted = true;

    if(this.formulario.valid){
      this.http.getById(this.formulario.controls['curso'].value)
      .pipe(
        tap(console.log),
        map(curso => curso),
        switchMap((CursoAtual: Curso) => {
          CursoAtual.alunos.push({nome: this.formulario.controls['aluno'].value})   
          return this.http.updateCurso(CursoAtual);
        })
      )
      .subscribe(sucess =>{ 
                  console.log(sucess);
                  this.formulario.reset();
                  this.router.navigate(['cursos']);
                  alert('Aluno Matriculado')
                },
                 error =>{
                   console.log(error)
                   alert('Algo Deu Errado !')
                 })
      }
  }

  hasError(field:string){
    if(this.formulario.controls[field].invalid){
      this.hasErrorDetected = true;
      return this.formulario.controls[field].invalid;
    }
  }

  onCancel(){
    this.formSubmitted = false;
    this.location.back();
    this.formulario.reset();
    console.log('onCancel');
  }

}
