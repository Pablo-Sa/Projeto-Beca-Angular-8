import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }


  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.authenticate().pipe(
      tap(b => {
        if (!b)
          this.router.navigateByUrl('/auth/login')
      })
    )
  }
  
}
