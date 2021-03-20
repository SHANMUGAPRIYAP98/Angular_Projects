import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentPayload } from '../Classes/payment-payload';

@Injectable({
  providedIn: 'root'
})
export class PayloadService {
  
  dbUrl="http://localhost:3000/PaymentPayload";
  constructor(private http:HttpClient) { }

  setCountryData(pmt:PaymentPayload)
  {
    return this.http.post<PaymentPayload>(this.dbUrl,pmt).toPromise().then((res)=>
    {
      console.log(res);
    });

 }
 getCountryData()
 {
   return this.http.get<PaymentPayload[]>(this.dbUrl);
 }
}
