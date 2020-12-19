import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule }from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from './auth/auth-module/auth.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { MainModule } from './main/main.module';
import { SugestionComponent } from './sugestion/sugestion.component';
import { NgxDropzoneModule} from 'ngx-dropzone';
import { AdminComponent } from './admin/admin/admin.component';
import { PerfilComponent } from './user/perfil/perfil.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { RegisterGymComponent } from './gym/register-gym/register-gym.component';
import { CepComponent } from './gym/cep/cep.component';
import { MapsComponent } from './maps/maps.component';
import { AdmImagensComponent } from './admin/adm-imagens/adm-imagens.component';
import { EquipamentComponent } from './gym/equipament/equipament.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginUserComponent,
    RegisterUserComponent,
    NotFoundComponent,
    IndexComponent,
    SugestionComponent,
    PerfilComponent,
    AdminComponent,
    RegisterGymComponent,
    CepComponent,
    MapsComponent,
    AdmImagensComponent,
    EquipamentComponent,




  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    AuthModule,
    MainModule,
    AppRoutingModule,
    MatCarouselModule.forRoot()


  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
