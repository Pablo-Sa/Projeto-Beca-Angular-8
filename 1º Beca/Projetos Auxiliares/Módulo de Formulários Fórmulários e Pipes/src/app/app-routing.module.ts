import { PipesComponent } from './pipes/pipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioTemplateDrivenComponent } from './formulario-template-driven/formulario-template-driven.component';
import { FormularioDataDrivenComponent } from './formulario-data-driven/formulario-data-driven.component';


const routes: Routes = [
  { path: 'templateForm', component: FormularioTemplateDrivenComponent },
  { path: 'dataForm', component: FormularioDataDrivenComponent },
  { path: 'pipes', component: PipesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pipes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
