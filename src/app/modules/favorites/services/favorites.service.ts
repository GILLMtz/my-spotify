import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private URL:string=environment.api;
  constructor(private httpClient:HttpClient) { }

  getFavorites():Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`).pipe(      map(({data}:any)=>{
      return data;
    })); 
  }
}
