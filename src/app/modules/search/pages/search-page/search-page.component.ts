import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/search/services/search.service';
import { Observable, of} from 'rxjs';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  listResults:Observable<any>=of([]);
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }
  receiveData(event:string):void{
    this.listResults=this.searchService.searchTracks$(event) ;
  }
}
