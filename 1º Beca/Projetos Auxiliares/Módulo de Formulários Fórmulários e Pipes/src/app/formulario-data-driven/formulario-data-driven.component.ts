import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-data-driven',
  templateUrl: './formulario-data-driven.component.html',
  styleUrls: ['./formulario-data-driven.component.css']
})
export class FormularioDataDrivenComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // })

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null,[Validators.required, Validators.email]]
      // usuarioLogado: this.formBuilder.group({
      //   cep: [null],
      //   nome: [null, [Validators.required, Validators.minLength(3)]],
      //   email: [null,[Validators.required, Validators.email]]
      // })
    })
  }


  onSubmit(){
    console.log(this.formulario)
    this.formulario.reset();
  }

  verificaErrosCampos(campo: string){
    if(this.formulario.controls[campo].invalid && this.formulario.controls[campo].touched){
      return true;
    }else{
      return false;
    }

  }

}
