import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { CursoService } from '../curso.service';
import { Curso } from '../cursoModel';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-cursos-listagem2',
  templateUrl: './cursos-listagem2.component.html',
  styleUrls: ['./cursos-listagem2.component.css'],
  preserveWhitespaces: true
})
export class CursosListagem2Component implements OnInit, OnDestroy {

  cursos: Curso[];
  sub: Subscription;
  completeLoading: boolean = false;
  errorLoading: boolean = false;
  deleteModalRef: BsModalRef;
  cursoSelecionadoParaExclusao: Curso;

  @ViewChild('deleteCursoModal',{ static: true }) deleteCursoModal;

  constructor(private cursoService: CursoService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.onRefresh();
  }

  editarCurso(id: number){
    // this.router.navigate(['cursos/editar', id]); 
    this.router.navigate(['editar', id], { relativeTo: this.route }); 
  }

  detalheCurso(id: number){
    // this.router.navigate(['cursos/detalhes', id]); 
    this.router.navigate(['detalhes', id], { relativeTo: this.route }); 
  }

  onDelete(curso: Curso){
    this.deleteModalRef = this.modalService.show(this.deleteCursoModal, {class: 'modal-sm'})
    this.cursoSelecionadoParaExclusao = curso;
  }

  onConfirmeDelete(){
    this.cursoService.delete(this.cursoSelecionadoParaExclusao)
    .subscribe(
      sucess => {
        this.deleteModalRef.hide();
        this.onRefresh();        
      },
      error => {
        if(error.status == '403'){
          this.deleteModalRef.hide();
          alert('Seção Expirada');
          this.router.navigate(['']); 
         }
      },
      () => {}
    );
  }

  onCancelDelete(){
    this.deleteModalRef.hide();
  }

  onRefresh(){
    this.sub = this.cursoService.getList()
     .subscribe(
       data => this.cursos = data,
       error => {
         this.errorLoading = true
         if(error.status == '403'){
           alert('Seção Expirada');
           this.router.navigate(['']); 
          }
        },
       () => this.completeLoading = true
     )
  }

  ngOnDestroy() {
    this.sub.unsubscribe(); // Desinscrevendo do Observable    
  }


}
