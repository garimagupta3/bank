import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) { }

  isSignUp = new BehaviorSubject(null);


  baseUrl = 'http://localhost:3000';

  getData() {
    return this.http.get(`${this.baseUrl}/customers`);
  }

  getBankDetails() {
    return this.http.get(`${this.baseUrl}/bankAccounts`);
  }






  addAccount(data: any) {
    return this.http.post(`${this.baseUrl}/favoriteAccounts`, data);
  }

  getAllBankDetails() {
    return this.http.get(`${this.baseUrl}/bankAccounts`);
  }

  getAccountById(id: string) {
    return this.http.get(`${this.baseUrl}/favoriteAccounts/${id}`);
  }

  updateAccount(data: any, id: any) {
    console.log(data)
    return this.http.put(`${this.baseUrl}/favoriteAccounts/${id}`, data);
  }
}
