import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCursosComponent } from '../cursos/listar-cursos/listar-cursos.component';



@NgModule({
  declarations: [ListarCursosComponent],
  imports: [
    CommonModule
  ],
  exports: [ListarCursosComponent]
})
export class ListarCursosModule { }
