import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from '../shared/admin.service';
import { Observable } from 'rxjs';
import { Sugestion } from 'src/app/sugestion/model/sugestion.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  displayedColumns: string[] = ['numero', 'name', 'email', 'type', 'description', 'imagens'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  registros: any;
  posicaoImagens: any;
  Sugestion$:Observable<Sugestion[]>
  dataSource: any


  constructor(private adminService: AdminService,   ) { }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.registros = this.dataSource.data
    this.adminService.get().subscribe((u) => {
      this.dataSource = new MatTableDataSource();
     this.dataSource = u;
     this.dataSource.paginator = this.paginator;
    })


  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

   if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
   }
  }

  deleteOcorrencias(arrayOcorrencias, element)  {
    let posicao = arrayOcorrencias.data.indexOf(element);
    arrayOcorrencias.data.splice(posicao, 1);
    // this.dataSource = new MatTableDataSource<PeriodicElement>(arrayOcorrencias.data);
  }

  redirecionaImagens(sugestion, element){
    console.log(sugestion)
    console.log(element)
    this.adminService.registros = sugestion
    console.log(this.adminService.registros)
  }

  delete(key: string) {
    console.log(key)
    this.adminService.delete(key)

  }



}




