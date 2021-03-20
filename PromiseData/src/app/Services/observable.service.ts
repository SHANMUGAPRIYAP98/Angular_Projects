import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FraudPay } from '../Classes/fraud-pay';
import {map} from 'rxjs/operators';
import { CurrencyPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor(private http:HttpClient) { }
  dbUrl="http://localhost:3000/fraudPay"
  getCurrencies():Observable<FraudPay[]>
  {
    return this.http.get<FraudPay[]>(this.dbUrl);
  }
  searchData():Observable<FraudPay[]>
  {
    return this.http.get<FraudPay[]>(this.dbUrl);
  }
  getIncorrectData():Observable<FraudPay[]>
  {
    return this.http.get<FraudPay[]>(this.dbUrl);
  }
  removeIncorrectData(idx:number):Promise<FraudPay>
  {
    return this.http.delete<any>(`${this.dbUrl}/${idx}`).toPromise();
  }
}
