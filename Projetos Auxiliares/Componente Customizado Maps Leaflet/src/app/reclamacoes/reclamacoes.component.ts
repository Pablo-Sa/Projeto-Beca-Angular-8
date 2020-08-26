import { MapService } from './../map.service';
import { Coordenadas } from './../map/coordenadas';
import { Component, OnInit } from '@angular/core';
import { Endereco } from './enderecoModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reclamacoes',
  templateUrl: './reclamacoes.component.html',
  styleUrls: ['./reclamacoes.component.css']
})
export class ReclamacoesComponent implements OnInit {

  public endereco: Endereco;
  private coordenadas: Coordenadas;

  constructor(
    private _http: HttpClient,
    private mapService: MapService
    ) { 
    this.endereco = new Endereco();
    this.coordenadas = new Coordenadas();
    this.endereco.rua = 'Av. Gov. Magalhães Pinto';
    this.endereco.numero = 1942;
    this.endereco.bairro = 'Vera Crus'
    this.endereco.cep = '39401-458'
   }

  ngOnInit() {
  }

  converterEnderecoParaCep(endereco: Endereco){
    const urlBase = 'https://www.google.com/maps?rlz=1C1GCEB_enBR914BR914&sxsrf=ALeKk02DfpFre3K_UiV0mMceqdDcz-VbPA:1598387082085&q=';
    const queryParams = `?rua=${endereco.rua}+?numero=${endereco.numero}+?bairro=${endereco.bairro}+?cep=${endereco.cep}`;
    this._http.get(`${urlBase}${queryParams}`)
    .subscribe(
      response =>{},
      errorResponse =>{
        const { error } = errorResponse;
        const parsedError = error.text.substring(error.text.indexOf('center=-') + 7, error.text.indexOf('&'));
        const coordenadas = parsedError.split('%2C');
        this.coordenadas.latitude = coordenadas[0];
        this.coordenadas.longitude = coordenadas[1];
        this.mapService.coordenadasBroadcast.next(this.coordenadas);
      });
  }

  eventoDeBlurDoFormulario(){
    this.converterEnderecoParaCep(this.endereco);
  }

}
