import { ListarCursosModule } from './servicos/modulos/listar-cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploDataBindingComponent } from './exemplo-data-binding/exemplo-data-binding.component';
import { ExemploViewChildComponent } from './exemplo-view-child/exemplo-view-child.component';
import { AlunosComponent } from './servicos/alunos/alunos.component';
import { AdicionarCursosModule } from './servicos/modulos/adicionar-cursos.module';
import { LoginComponent } from './login-example/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploDataBindingComponent,
    ExemploViewChildComponent,
    AlunosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdicionarCursosModule,
    ListarCursosModule
  ],
  // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
