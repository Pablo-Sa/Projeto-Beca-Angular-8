import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastramentoComponent } from './cadastramento/cadastramento.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'cadastramento', component: CadastramentoComponent},
  { path: 'lista', component: ListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
