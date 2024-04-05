import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL=environment.api;
  constructor(private httpClient:HttpClient) { }

  searchTracks$(term:string):Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks?${term}`).pipe(
        map((dataRaw: any) => dataRaw.data),
        map((track: any) =>
          track.filter(({ name, album, artist }: any) =>
           name.toLowerCase().includes(term)||
            artist.name.toLowerCase().includes(term)||
            artist.nickname.toLowerCase().includes(term)||
            album.toLowerCase().includes(term)
          )

        )
        /*      filter((track) => track.name.toLowerCase().includes(term))
               
                */

      );
  
  }
}
