import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FraudPay } from '../Classes/fraud-pay';

@Injectable({
  providedIn: 'root'
})
export class FraudPaymentService {
  serverUrl="http://localhost:3000/fraudPay";
  constructor(private http:HttpClient) { }
  setFraudPayDetails(fp)
  {
      return this.http.post<FraudPay>(this.serverUrl,fp).toPromise().then((response)=>
      {
        console.log("Data Inserted Successfully",response);
      },(err)=>{
        console.error("Unfortunately Something Happened!!")
      });
  }
  getFraudPayDetails()
  {
    return this.http.get<FraudPay[]>(this.serverUrl);
    
  }
}
