import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isSignUp = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  baseUrl= 'http://localhost:3000' ;

  getData(){
    return this.http.get(`${this.baseUrl}/customers`);
  }






}
