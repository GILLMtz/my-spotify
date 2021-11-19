import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookieServie:CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     

try {
  
  const token=this.cookieServie.get('token_service');
  const newRequest=request.clone({
   setHeaders:{
      authorization:`Bearer ${token}`
   }
  });
  return next.handle(newRequest);
} catch (error) {
  console.log('Error InterSes',error);
  
  return next.handle(request);
}

    
  }
}
