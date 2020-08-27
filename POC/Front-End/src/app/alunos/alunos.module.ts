import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosListagemComponent } from './alunos-listagem/alunos-listagem.component';


@NgModule({
  declarations: [AlunosListagemComponent],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    ReactiveFormsModule
  ],
  exports: [AlunosListagemComponent]
})
export class AlunosModule { }
