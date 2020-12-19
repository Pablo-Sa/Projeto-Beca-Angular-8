import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { TerceiraTelaComponent } from './terceira-tela/terceira-tela.component';
import { QuartaTelaComponent } from './quarta-tela/quarta-tela.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },

  {
    path: "index",
    component: IndexComponent
  },

  {
    path: "cadastro",
    component: TerceiraTelaComponent
  },

  {
    path: "listagem",
    component: QuartaTelaComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
