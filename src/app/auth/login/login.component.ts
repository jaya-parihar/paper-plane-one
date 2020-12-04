import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faLock,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import { faFacebookSquare,
faGooglePlus, } from "@fortawesome/free-brands-svg-icons";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  faLock = faLock;
  faEnvelope = faEnvelope;
  faFacebookSquare = faFacebookSquare;
  faGooglePlus = faGooglePlus;

  goTo(): void{
    this.router.navigate(['vendor/register']);
  }

}
