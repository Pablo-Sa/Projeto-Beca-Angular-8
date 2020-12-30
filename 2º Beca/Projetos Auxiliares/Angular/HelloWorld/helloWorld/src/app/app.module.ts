import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from 'src/components/meu-primeiro-component/meu-primeiro-component.component';
import { MeuSegundoComponentComponent } from './components/meu-segundo-component/meu-segundo-component.component';
import { TwoWayDatabindingComponent } from './components/two-way-databinding/two-way-databinding.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponentComponent,
    TwoWayDatabindingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
