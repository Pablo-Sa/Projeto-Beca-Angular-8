import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioDataDrivenComponent } from './formulario-data-driven/formulario-data-driven.component';
import { FormularioTemplateDrivenComponent } from './formulario-template-driven/formulario-template-driven.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { PipesComponent } from './pipes/pipes.component';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormularioDataDrivenComponent,
    FormularioTemplateDrivenComponent,
    FormDebugComponent,
    PipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
