import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './interface/register';
import { Observable  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }


  registerVendor(registerBody:any): Observable<Register>
  {
    const serverUrl = "http://paperplane.store:3000/vendor/register";
    console.log(registerBody);
    return this.httpClient.post<Register>(serverUrl, registerBody);
  }
}
