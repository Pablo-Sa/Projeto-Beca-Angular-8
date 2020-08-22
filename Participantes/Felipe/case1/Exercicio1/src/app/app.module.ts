import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from './auth-Service/Auth.service';
import { ListaDeComprasComponent } from './lista-de-compras/lista-de-compras.component';
import { TabelaComprasComponent } from './tabela-compras/tabela-compras.component';
import { AdressComponent } from './adress/adress.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ListaDeComprasComponent,
    TabelaComprasComponent,
    AdressComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
