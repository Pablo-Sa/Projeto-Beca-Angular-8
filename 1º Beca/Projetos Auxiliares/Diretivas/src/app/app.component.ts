import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';

  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Diretivas Estruturais',
            link: './first',
            index: 0
        }, {
            label: 'Diretivas de Atributos ',
            link: './second',
            index: 1
        }, {
            label: 'Event Binding',
            link: './third',
            index: 2
        }, 
        /*, {
          label: 'Operador Elvis',
          link: './forth',
          index: 3
      }*/
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
  
}
