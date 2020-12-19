import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosListagemPipeComponent } from './cursos-listagem/cursos-listagem.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListagem2Component } from './cursos-listagem2/cursos-listagem2.component';
import { CursoFormularioComponent } from './curso-formulario/curso-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoFormularioEditarComponent } from './curso-formulario-editar/curso-formulario-editar.component';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';


@NgModule({
  declarations: [CursosListagemPipeComponent,
                 CursosListagem2Component, 
                 CursoFormularioComponent, 
                 CursoFormularioEditarComponent,
                 DetalheCursoComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule        
  ],
  exports: [CursosListagemPipeComponent,
            CursoFormularioComponent,
            CursoFormularioEditarComponent,
            DetalheCursoComponent]
              
})
export class CursosModule { }
