import { Component, OnInit } from '@angular/core';
import { CEP } from './model/cep.model';
import { CepService } from './shared/cep.service';
@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  cep = new CEP()
  constructor(private cepService:CepService) { }

  ngOnInit(): void {
  }
  search(){
    this.cepService.search(this.cep.cep).then((cep:CEP)=>{
      this.cep = cep
     // console.log(this.cep)
    })
  }

}
