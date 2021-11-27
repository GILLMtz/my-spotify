import { Component, OnInit,EventEmitter ,Output} from '@angular/core';


@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css']
})
export class HeaderSearchComponent implements OnInit {

  @Output() callbackData:EventEmitter<any>=new EventEmitter();
src:string=''
  constructor() { }

  ngOnInit(): void {
  }
  callSearch(term:string):void{
    if(term.length>=3){
      this.callbackData.emit(term)
    }
      
  }
}
