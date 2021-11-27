import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  trackRecommended!:TrackModel; 
  tracksTranding: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObserves: Array<Subscription> = [];
  constructor(private trackService: TrackService) {

  }

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();

  }

  loadDataAll(): void {
    this.trackService.getAllTracks$().
      subscribe(
        (response: TrackModel[]) => {
          this.tracksTranding = response;
        }
      );
  }
  loadDataRandom(): void {
    this.trackService.getAllRandom$().subscribe(
      (response: TrackModel[]) => {
        this.tracksRandom = response;
        this.trackRecommended=this.getTrackRecommended(this.tracksRandom);
      }
    );
  }


  private getTrackRecommended(data:TrackModel[]):any{
    if(data!==null && data.length>0){
      const randomIndex=Math.floor(Math.random() * ((data.length-1) - 0)) + 0;
      return data[randomIndex];
    }
    return {};
  }
}
