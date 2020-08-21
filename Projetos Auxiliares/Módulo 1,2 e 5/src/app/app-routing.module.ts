import { ExemploDataBindingComponent } from './exemplo-data-binding/exemplo-data-binding.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-example/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'databinding', component: ExemploDataBindingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
