import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
 

@Injectable({
  providedIn: 'root'
})
export class TrackService {
 private readonly URL=environment.api;
  constructor(private httpClient:HttpClient) {
   
   }
  
   getAllTracks$():Observable <any>{
     return this.httpClient.get(`${this.URL}/tracks`)
     .pipe(
      map(({data}:any)=>{
        return data;
      })
     );
   }

   getAllRandom$():Observable <any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
     map(({data}:any)=>{
       return data.reverse();
     }),
     map((dataReverse)=>{
      return dataReverse.filter((track:TrackModel)=> (track._id!== 1)
      )
     }),
     catchError(err=>{
       console.log('Error en la peticion');
       console.table(err)
       return of([]);
     })
    );
  }
}
