import { ProjetosService } from './../Servicos/projetos.service';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { Formulario } from './../formulario';
import { map, switchMap, exhaustMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  submitted = false;
  form: FormGroup;

  public informacao = new Formulario();

  constructor(private fb: FormBuilder, public service: ProjetosService) { }

  ngOnInit() {
    this.form = this.fb.group({
      projeto: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      responsavel: [ null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]


    });

  }

  // tslint:disable-next-line: typedef

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    this.service.create(this.form.value).subscribe(
      sucess => console.log(' Sucesso'),
      error => console.log(error),
      () => console.log('request ok')
    );
    // if (this.form.valid){
    //   console.log('submit');
    // }
  }

  onCancel() {
    this.submitted =  false;
    this.form.reset();
    console.log('cancel');
  }



}
