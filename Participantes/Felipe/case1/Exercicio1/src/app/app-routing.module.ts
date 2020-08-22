import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ListaDeComprasComponent } from './lista-de-compras/lista-de-compras.component';
import{ TabelaComprasComponent } from './tabela-compras/tabela-compras.component'
import { AdressComponent } from './adress/adress.component';
const routes: Routes = [
  {path:'',pathMatch:"full",component:LoginComponent},
  {path:'list', component:ListaDeComprasComponent},
  {path:'compras', component:TabelaComprasComponent},
  {path:'adress', component:AdressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
