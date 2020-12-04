import { Component, OnInit } from '@angular/core';

import {faBell,
faComments, 
faExpand,
faThLarge,
faSearch, 
faBars} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  faBell = faBell;
  faComments = faComments;
  faExpand = faExpand;
  faThLarge = faThLarge;
  faSearch = faSearch;
  faBars = faBars;

}
