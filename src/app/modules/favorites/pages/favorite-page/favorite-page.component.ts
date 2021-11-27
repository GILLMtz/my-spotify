import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { FavoritesService } from '@modules/favorites/services/favorites.service';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit,OnDestroy {
  listResults:Array<TrackModel>=[]; 
  results$!:Subscription;
  constructor(private favoritesService:FavoritesService) { }

  ngOnInit(): void {
    this.loadData();
  }
  private loadData(){
    this.results$ =this.favoritesService.getFavorites().subscribe(
    (res)=>{
      this.listResults=res;
    }
    )
  }
  
ngOnDestroy(){
  this.results$.unsubscribe();
}


}
