import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { RegisterGymComponent } from '../gym/register-gym/register-gym.component';
import { CepComponent } from '../gym/cep/cep.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    FormsModule,
    MaterialModule
  ]
})
export class MainModule { }
