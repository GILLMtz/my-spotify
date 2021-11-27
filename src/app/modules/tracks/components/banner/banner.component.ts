import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() track!:TrackModel;
  constructor(private multimediaService:MultimediaService ) { }

  ngOnInit(): void { }

  sendPlay():void{
    this.multimediaService.trackInfo$.next(this.track);
  }

}
