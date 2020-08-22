import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../shared/alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunos:string[];
  public alunosService: AlunosService;

  constructor() {
    this.alunosService = new AlunosService();
    this.alunos = this.alunosService.getAlunos();
   }

  ngOnInit() {
  }

}
