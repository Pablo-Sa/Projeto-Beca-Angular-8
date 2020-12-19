import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adress } from '../adress.model';
@Injectable({
  providedIn: 'root'
})
export class AdressService {
  emmitCep ={}
constructor(private http:HttpClient) { }

search(cep:string){
  return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  .toPromise().then((res:Response) =>{
    this.emmitCep = this.converterResp(res)
   return  this.converterResp(res)

  })
  }
  private converterResp(cepRes):Adress{
    let cep = new Adress()
    cep.cep = cepRes.cep;
    cep.logradouro = cepRes.logradouro;
    cep.cidade = cepRes.localidade
    cep.bairro = cepRes.bairro
    cep.complemento = cepRes.complemento
    cep.numero = cepRes.unidade
    cep.estado  =  cepRes.uf
    return cep

  }
}
