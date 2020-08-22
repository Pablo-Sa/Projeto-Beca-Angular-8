import { UltimoCursoCriadoComponent } from "./../cursos/ultimo-curso-criado/ultimo-curso-criado.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdicionarCursosComponent } from "../cursos/adicionar-cursos/adicionar-cursos.component";

@NgModule({
  declarations: [AdicionarCursosComponent, UltimoCursoCriadoComponent],
  imports: [CommonModule],
  exports: [AdicionarCursosComponent],
})
export class AdicionarCursosModule {}
