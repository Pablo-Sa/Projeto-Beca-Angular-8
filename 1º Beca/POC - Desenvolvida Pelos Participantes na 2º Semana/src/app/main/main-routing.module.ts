import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../index/index.component'
import { AuthGuardService } from '../auth/guard/auth-guard.service';
import { SugestionComponent } from '../sugestion/sugestion.component';
import { RegisterGymComponent } from '../gym/register-gym/register-gym.component';

const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [AuthGuardService] },
  { path: 'sugestion', component: SugestionComponent, canActivate: [AuthGuardService] },
  { path: 'registergym', component:RegisterGymComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
