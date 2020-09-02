import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep/shared/cep.service';
import { CEP } from '../cep/model/cep.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Coordinate } from 'src/app/maps/model/coordinate.model';
import { MapsService } from 'src/app/maps/shared/maps.service';
import * as L from 'leaflet';
import { GYM } from './model/gym.model';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EquipamentService } from '../equipament/shared/equipament.service';
import { GymService } from './shared/gym.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-gym',
  templateUrl: './register-gym.component.html',
  styleUrls: ['./register-gym.component.css']
})
export class RegisterGymComponent implements OnInit {
  local: CEP
  private map;
  private coordenadas: Coordinate;
  private endereco: CEP
  numbers: number

  constructor(private cepService: CepService, private fb: FormBuilder, private http: HttpClient, private mapsService: MapsService,
    private authService: AuthService, private snackBar: MatSnackBar, private equipamentService: EquipamentService,
    private gymService: GymService, private router:Router) {
    this.endereco = new CEP()
    this.coordenadas = new Coordinate();
  }

  ngOnInit(): void {
  }



  onSubmit() {

    this.local = this.cepService.emmitCep
    this.converterEnderecoParaCep(this.local, this.numbers);
  }

  converterEnderecoParaCep(endereco: CEP, n) {
    console.log(endereco, n)
    const urlBase = 'https://www.google.com/maps?rlz=1C1GCEB_enBR914BR914&sxsrf=ALeKk02DfpFre3K_UiV0mMceqdDcz-VbPA:1598387082085&q=';
    const queryParams = `?rua=${endereco.street}+?numero=${n}+?bairro=${endereco.neighborhood}+?cep=${endereco.cep}`;
    this.http.get(`${urlBase}${queryParams}`)
      .subscribe(
        response => { },
        errorResponse => {
          const { error } = errorResponse;
          const parsedError = error.text.substring(error.text.indexOf('center=-') + 7, error.text.indexOf('&'));
          const coordenadas = parsedError.split('%2C');
          //console.log(errorResponse)
          this.coordenadas.latitude = coordenadas[0];
          this.coordenadas.longitude = coordenadas[1];
          console.log(coordenadas[0], coordenadas[1]);
          this.mapsService.coordenadasBroadcast.next(this.coordenadas);
        });
  }

  save() {


    this.authService.getUser().subscribe((u) => {
      const g: GYM = {
        latitude: this.coordenadas.latitude,
        longitude: this.coordenadas.longitude,
        cep: this.local.cep,
        city: this.local.city,
        complement: this.local.complement,
        neighborhood: this.local.neighborhood,
        number: this.numbers,
        state: this.local.state,
        street:this.local.street,
        user: u

      }
      console.log(g)
      this.gymService.addSugestion(g).then((s) => {
        this.snackBar.open('Salvo com Sucesso', 'ok', {
          duration: 2000,
          verticalPosition:'top'
        })
        this.router.navigate(['/'])
      })
    })







  }
}






