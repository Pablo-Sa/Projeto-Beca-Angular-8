import { CursosService } from './services/shared/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './services/alunos/alunos.component';
import { AdicionarCursosComponent } from './services/cursos/adicionar-cursos/adicionar-cursos.component';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';
import { EmissorComponent } from './emissor/emissor.component';
import { RecebedorComponent } from './recebedor/recebedor.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    AdicionarCursosComponent,
    NovoComponenteComponent,
    EmissorComponent,
    RecebedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
