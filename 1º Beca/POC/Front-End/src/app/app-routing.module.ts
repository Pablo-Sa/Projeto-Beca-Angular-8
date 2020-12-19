import { AlunosListagemComponent } from './alunos/alunos-listagem/alunos-listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CursosListagem2Component } from './cursos/cursos-listagem2/cursos-listagem2.component';
import { CursoFormularioComponent } from './cursos/curso-formulario/curso-formulario.component';
import { CursoFormularioEditarComponent } from './cursos/curso-formulario-editar/curso-formulario-editar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DetalheCursoComponent } from './cursos/detalhe-curso/detalhe-curso.component';


const routes: Routes = [  
  { path: '', component: LoginComponent },
  { path: 'cursos', component: CursosListagem2Component, canActivate:[AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'alunos', component: AlunosListagemComponent, canActivate:[AuthGuard]},
  { path: 'cursos/novo', component: CursoFormularioComponent,canActivate:[AuthGuard]},
  { path: 'cursos/editar/:id', component: CursoFormularioEditarComponent, canActivate:[AuthGuard] },
  { path: 'cursos/detalhes/:id', component: DetalheCursoComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
