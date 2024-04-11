import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() track:TrackModel={_id:0,name:'',album:'',cover:'',url:''};
  constructor(public multimediaService:MultimediaService ) { }
  playerStatus:boolean=false;
  ngOnInit(): void {
    this.multimediaService.playerStatus$.subscribe(state=>this.playerStatus=state==='playing'?true:false)
   }

  sendPlay():void{
    this.multimediaService.trackInfo$.next(this.track);
  }

}
