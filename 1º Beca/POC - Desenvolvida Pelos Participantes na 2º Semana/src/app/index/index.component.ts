import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  slides = [
    {'image': 'https://www.al.sp.gov.br/repositorio/noticia/N-05-2016/fg189719.jpg'}, 
    {'image': 'https://servicos.sjc.sp.gov.br/servicos/noticias_adm/pmsjc_imagens/noticias/201511/F00027642g.jpg'},
    {'image': 'https://ginast.com.br/wp-content/uploads/2017/04/Academia-ao-ar-livre-em-Belo-Horizonte.jpg'}, 
    {'image': 'https://www.sonoticias.com.br/wp-content/uploads/2018/10/Academias-de-ar-livre-em-Sinop-outubro-2018-Ademir-Jrass-974x556.png'}, 
    {'image': 'https://i.pinimg.com/originals/13/8a/e1/138ae1cbc9c584f6c6e79b2abe308352.jpg'}
  ];


  constructor() { }

  ngOnInit(): void {

    const options = {
      stringsElement: '#typed-strings',
      strings: ['Saúde e bem estar', 'Venha treinar conosco', 'Inovação e satisfação'],
      typeSpeed: 170,
      backSpeed: 200,
      backDelay: 300,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1200,
      loop: true
      };

      const typed = new Typed ('.typing-element', options);

  }

}
