import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl = 'http://localhost:9000';
  constructor(private http: HttpClient) { }

  addAccount(data: any) {
    return this.http.post(`${this.baseUrl}/favoriteAccounts`, data);
  }

  getAllBankDetails() {
    return this.http.get(`${this.baseUrl}/bankAccounts`);
  }
}
