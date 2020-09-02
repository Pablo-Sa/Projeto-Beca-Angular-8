import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adm-imagens',
  templateUrl: './adm-imagens.component.html',
  styleUrls: ['./adm-imagens.component.css']
})
export class AdmImagensComponent implements OnInit {

  registro: any;
  imagem: any;
  img: any;
  endereco: any;
  imagenSugestao: any;

  urlBase = 'https://firebasestorage.googleapis.com/v0/b/projeto-beca.appspot.com/o/Sugestao%2F';

  constructor(private adminService: AdminService,
              private http: HttpClient) { }

  ngOnInit(): void {
   this.registro = this.adminService.registros;
  

    this.endereco = this.urlBase + this.registro.User.id;
    
    this.http.get(this.endereco).subscribe((success: any) => {
      const urlImagem = this.endereco + '?alt=media&token=' + success.downloadTokens;
      this.imagenSugestao = urlImagem;
    })

  }





}
