import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaymentPayload } from 'src/app/Classes/payment-payload';
import { PayloadService } from 'src/app/Services/payload.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  id:number=0;
  cid:number=0;
  payAmt:number=0;
  curr:string="";
  fromAcc:number=0;
  toAcc:number=0;
  beneAcc:number=0;
  bankChar:number=0;
  payment:PaymentPayload=new PaymentPayload(this.id,this.cid,this.payAmt,this.curr,this.fromAcc,this.toAcc,this.beneAcc,this.bankChar);
  title="Payment Payload Service";
  currency:string[]=["INR","USD","EUR","RUB","SGD","KHR","MYR","CNY","IRR","NGN"]
  constructor(private payServ:PayloadService,private http:HttpClient) {

   }
 

  ngOnInit(): void {
    
  }
  onPaymentData()
  {
    console.log(this.payment);
     this.payServ.setCountryData(this.payment);
  }
  fields=["id","cid","payAmt","curr","fromAcc","toAcc","beneAcc","bankChar"]
  pay:PaymentPayload[]=[]
  getData()
  {
    this.payServ.getCountryData().subscribe((fetchata)=>
    {
      this.pay=fetchata;
    });
  }
}
