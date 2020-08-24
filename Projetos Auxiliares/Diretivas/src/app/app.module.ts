import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiretivasEstruturaisComponent } from './components/diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributosComponent } from './components/diretivas-atributos/diretivas-atributos.component';
import { FormsModule } from '@angular/forms';
import { DirectiveCustomDirective } from './directives/directive-custom.directive';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { OperadorElvisComponent } from './components/operador-elvis/operador-elvis.component';
import { PrimeiraDirecDirective } from './directives/primeira-direc.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasEstruturaisComponent,
    DiretivasAtributosComponent,
    DirectiveCustomDirective,
    EventBindingComponent,
    OperadorElvisComponent,
    PrimeiraDirecDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
