import { Component, OnInit } from '@angular/core';
import {Adress} from './adress.model';
import { AdressService } from './shared/adress.service'
@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {
  cep= new Adress();
  constructor(private adressService : AdressService) { }

  ngOnInit(): void {
  }
  search(){
    this.adressService.search(this.cep.cep).then((cep:Adress)=>{
      this.cep = cep
      console.log(this.cep)
    })
  }

}
