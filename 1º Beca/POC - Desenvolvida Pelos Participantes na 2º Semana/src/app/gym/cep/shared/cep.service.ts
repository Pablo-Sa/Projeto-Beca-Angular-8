import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CEP } from '../model/cep.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  emmitCep = {}
  private cepCollection: AngularFirestoreCollection<CEP> = this.afs.collection('CEP')
constructor(private afs: AngularFirestore,private http:HttpClient) { }

search(cep:string){
  return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  .toPromise().then((res:Response) =>{
    this.emmitCep = this.converterResp(res)
    //console.log(this.emmitCep)
   return  this.converterResp(res)

  })
  }
  private converterResp(cepRes):CEP{
    let cep = new CEP()
    cep.cep = cepRes.cep;
    cep.street = cepRes.logradouro;
    cep.city = cepRes.localidade
    cep.neighborhood = cepRes.bairro
    cep.complement = cepRes.complemento
    cep.number = cepRes.unidade
    cep.state  =  cepRes.uf
    return cep

  }
  saveCep(c:CEP) {
    this.cepCollection.add({...c})
  }
  getCep() {
    return this.cepCollection.valueChanges()
  }
}
