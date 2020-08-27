import { map, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../cursoModel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalhe-curso',
  templateUrl: './detalhe-curso.component.html',
  styleUrls: ['./detalhe-curso.component.css'],
  preserveWhitespaces: true
})
export class DetalheCursoComponent implements OnInit {

  curso: Curso;
  
  constructor(private route: ActivatedRoute,
              private cursoService: CursoService,
              private location: Location,
              private router: Router
              ) { }

  ngOnInit() {

    this.route.params
    .pipe(
      map(params => params.id),
      switchMap(id => this.cursoService.getById(id)
      )
    )    
    .subscribe(
      curso => this.curso  = curso,
      error=>{
        if(error.status == '403'){
          alert('Seção Expirada');
          this.router.navigate(['']); 
         }

      }
    );

 }

 Back(){
   this.location.back();
 }

}
