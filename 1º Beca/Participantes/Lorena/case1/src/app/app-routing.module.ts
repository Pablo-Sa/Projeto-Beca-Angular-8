import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemCadastrosComponent } from './listagem-cadastro/listagem-cadastro.component';
import { LoginComponent } from './login/login.component';
import { BoasvindasComponent } from './boasvindas/boasvindas.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
  {path: "login" , component: LoginComponent},
  {path: "boasvindas" ,  component: BoasvindasComponent},
  {path: "listandocadastros" ,  component: ListagemCadastrosComponent},
  {path: "cadastro" ,  component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
