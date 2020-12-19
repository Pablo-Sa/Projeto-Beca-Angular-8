import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/model/user.model';
import { AuthService } from '../auth/shared/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;
  authenticated$: Observable<boolean>;
  admin$:any
  constructor(private authService: AuthService,
  private router:Router) {
    this.user$ = this.authService.getUser()
    this.authenticated$ = this.authService.authenticate()

    this.user$.subscribe((u) => {
      if (u.id == 'oGBeVB5j5MhEDyRXbLLYhGcaMck1') {
        this.admin$ = true

      }
    })

  }

  ngOnInit(): void {


  }
  logout() {
    this.authService.logout()
    this.router.navigateByUrl('/auth/register')
}
}
