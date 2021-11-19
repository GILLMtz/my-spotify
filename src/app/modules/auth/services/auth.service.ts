import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL=environment.api;
  constructor(private httpClient:HttpClient ) { }
  sendCredential(email:string,password:string):Observable<any>{
    const body={
      email,
      password
    }
    return this.httpClient.post(`${this.URL}/auth/login`,body)
 
  }
}