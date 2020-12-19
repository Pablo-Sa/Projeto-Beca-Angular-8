import { ListagemCadastrosComponent } from './listagem-cadastro/listagem-cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BoasvindasComponent } from './boasvindas/boasvindas.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './login/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    BoasvindasComponent,
    HeaderComponent,
    ListagemCadastrosComponent,
    LoginComponent,
    RodapeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
