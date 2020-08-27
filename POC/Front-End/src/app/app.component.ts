import { LoginService } from './login/login.service';
import { Component } from '@angular/core';
import { TokenService } from './login/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appBecaAngular';

  mostrarMenu: boolean = false;

  constructor(private loginService: LoginService,
              private tokenService: TokenService,
              private router: Router){ }

  ngOnInit() {
    this.loginService.mostrarMenuEmitter.subscribe(
      response => this.mostrarMenu = response
    ) 
  }

  logout(){
    console.log('Logout');
    alert('Logout Com Sucesso');
    this.tokenService.removeToken();
    this.router.navigate(['']); 
    this.mostrarMenu = false;
  }
}
