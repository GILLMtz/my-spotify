import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
@Input() mode: 'small' |'big'='small';
@Input() track:TrackModel={_id:0,name:'',album:'',cover:'',url:''};
  constructor(public multimediaService:MultimediaService) { }


  playerStatus:boolean=false;
  ngOnInit(): void {
    this.multimediaService.playerStatus$.subscribe(state=>this.playerStatus=state==='playing'?true:false)
  }

  sendPlay(track:TrackModel):void{
    this.multimediaService.trackInfo$.next(track);
 
  }


}
