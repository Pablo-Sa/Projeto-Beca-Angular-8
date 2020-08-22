import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AdicionaProdutosComponent } from './adiciona-produtos/adiciona-produtos.component';
import { ProdutosCadastradosComponent } from './produtos-cadastrados/produtos-cadastrados.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'adcprodutos', component: AdicionaProdutosComponent},
  { path: 'produtoscadastrados', component: ProdutosCadastradosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
