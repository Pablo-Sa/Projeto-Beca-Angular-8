import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { Injectable, NgModule } from '@angular/core';
import {
 HttpEvent,
 HttpInterceptor,
 HttpHandler,
 HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

    private token:string;

    constructor(private tokenService: TokenService){
    }

 intercept(
  req: HttpRequest<any>,
  next: HttpHandler,
 ): Observable<HttpEvent<any>> {
  this.token = this.tokenService.getToken();
  console.log('Interceptor');   
  console.log(this.token);
  const dupReq = req.clone({
   headers: req.headers.set('Authorization', `Bearer ${this.token}`),
 });
 return next.handle(dupReq);
 }
}
    
@NgModule({
providers: [
 {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpsRequestInterceptor,
  multi: true,
 },
],
})
   
export class Interceptor {}