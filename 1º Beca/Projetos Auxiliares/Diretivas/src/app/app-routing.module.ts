import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiretivasAtributosComponent } from './components/diretivas-atributos/diretivas-atributos.component';
import { DiretivasEstruturaisComponent } from './components/diretivas-estruturais/diretivas-estruturais.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { OperadorElvisComponent } from './components/operador-elvis/operador-elvis.component';


const routes: Routes = [
            { path: '', redirectTo: '/first', pathMatch: 'full' },
            { path: 'first', component:  DiretivasEstruturaisComponent},
            { path: 'second', component:  DiretivasAtributosComponent},
            { path: 'third', component: EventBindingComponent},
           // { path: 'forth', component: OperadorElvisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
