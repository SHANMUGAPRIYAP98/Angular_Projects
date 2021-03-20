import { Component, OnInit } from '@angular/core';
import { FraudPay } from 'src/app/Classes/fraud-pay';
import { FraudPaymentService } from 'src/app/Services/fraud-payment.service';

@Component({
  selector: 'app-fraudulent-payment',
  templateUrl: './fraudulent-payment.component.html',
  styleUrls: ['./fraudulent-payment.component.css']
})
export class FraudulentPaymentComponent implements OnInit {
  title="Fraudulent Payment";
  bcurr:string[]=["INR","USD","EUR","RUB","SGD","KHR","MYR","CNY","IRR","NGN"]
  id:number;
  banCur:string;
  amt:number;
  accNo:number;
  date:string;
  time:string;
  status:string;
  constructor(private fpayServ:FraudPaymentService) { }
  fpay:FraudPay[];
  ngOnInit(): void {
  }
  onButClick()
  {
    if(this.id==undefined||this.banCur.length>0&&this.amt!=undefined&&this.date.length>0&&this.banCur!="Select Currency"&&this.time.length>0)
    {
      this.status="Success";
    }
    else{
      this.status="Failure";
    }
    let fpay=new FraudPay(this.id,this.banCur,this.amt,this.accNo,this.date,this.time,this.status);
    console.log(fpay);
    this.fpayServ.setFraudPayDetails(fpay);
  }
  onFetchBut()
  {
      this.fpayServ.getFraudPayDetails().subscribe((data)=>
      {
        this.fpay=data;
        console.log(this.fpay);
        
      });
  }
}
