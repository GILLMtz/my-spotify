import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, ObservedValueOf, Observer, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>();
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public timeElapsed$:BehaviorSubject<string>=new BehaviorSubject('00:00');
  public timeRemaining$:BehaviorSubject<string>=new BehaviorSubject('-00:00');
  public playerStatus$:BehaviorSubject<string>=new BehaviorSubject('paused');
  public playerPercentage$:BehaviorSubject<number>=new BehaviorSubject(0);
  public audio!: HTMLAudioElement;
  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe(
      (responseOk) => {
        if (responseOk) {
          this.setAudio(responseOk);
        }
      }
    );

    this.listenAllEvents();
  }
  private setAudio(track: TrackModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerstatus, false);
    this.audio.addEventListener('play', this.setPlayerstatus, false);
    this.audio.addEventListener('pause', this.setPlayerstatus, false);
    this.audio.addEventListener('ended', this.setPlayerstatus, false);
  }

  private setPlayerstatus=(state:any)=>{
     
    switch(state.type){
      case 'play':
        this.playerStatus$.next('play') 
      break;
      case 'playing':
        this.playerStatus$.next('playing') 
      break;
      case 'ended':
        this.playerStatus$.next('ended') 
      break;
      default:
        this.playerStatus$.next('paused')
        break;
    }

  }
  private calculateTime=() => {
 
    const {duration,currentTime}=this.audio;
    this.setTimeElapsed(currentTime);
    this.timeRemaining(currentTime,duration);
     this.setPercentage(currentTime,duration);
  }

  private setPercentage(currentTime:number,duration:number):void{
    this.playerPercentage$.next(((currentTime*100)/duration));
  }

  private setTimeElapsed(currentTime:number):void{
    let seconds=  Math.floor(currentTime % 60);
    let minutes=Math.floor((currentTime / 60)%60);
    const displaySeconds=(seconds<10)?`0${seconds}`:seconds;
    const displayMinutes=(minutes<10)?`0${minutes}`:minutes;

    const displayFormat=`${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$.next(displayFormat);
  }
private timeRemaining(currentTime:number,duration:number){
  const timeLeft=duration-currentTime;
  let seconds=  Math.floor(timeLeft % 60);
  let minutes=Math.floor((timeLeft / 60)%60);
  const displaySeconds=(seconds<10)?`0${seconds}`:seconds;
  const displayMinutes=(minutes<10)?`0${minutes}`:minutes;

  const displayFormat=`-${displayMinutes}:${displaySeconds}`;
  this.timeRemaining$.next(displayFormat);
}
/*      segundos | Minutos 
  0: 209.424    3.4904
  1: 18.682942  0.31113 */
public togglePlayer():void{
  (this.audio.paused)?this.audio.play():this.audio.pause();
}
public seekAudio(percentage: number): void {
  const { duration } = this.audio
  const percentageToSecond = (percentage * duration) / 100
  this.audio.currentTime = percentageToSecond

}
}
