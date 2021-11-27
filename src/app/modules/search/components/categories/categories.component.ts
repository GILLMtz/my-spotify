import { Component, OnInit } from '@angular/core';

interface Category {
  name: string
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 
  private mockCategory: Array<Category>=[]; 
  categories: Array<Category> =[];

  constructor() { }

  ngOnInit(): void {
    this.mockCategory=[
      { name: "Pop" },
      { name: "Rock" },
      { name: "Instrumental" },
      { name: "Jazz" },
      { name: "Blues" },
      { name: "Country" }
    ];
    this.categories=this.mockCategory;
  }


}
