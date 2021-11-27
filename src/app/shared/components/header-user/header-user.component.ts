import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {
  cover:string='../../../../assets/images/defaultUser.png';
  constructor() { }

  ngOnInit(): void {
  }

}
