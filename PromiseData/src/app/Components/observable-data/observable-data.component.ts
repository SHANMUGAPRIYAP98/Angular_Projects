import { CurrencyPipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FraudPay } from 'src/app/Classes/fraud-pay';
import { ObservableService } from 'src/app/Services/observable.service';

@Component({
  selector: 'app-observable-data',
  templateUrl: './observable-data.component.html',
  styleUrls: ['./observable-data.component.css']
})
export class ObservableDataComponent implements OnInit {
  
  constructor(private obServ:ObservableService) { }
  fpay:FraudPay[];
  ngOnInit(): void {
  }
  key1:string;
  key2:number;
  isButClicked1:boolean=false;
  isButClicked2:boolean=false;
  onFetchCurr()
  {
    this.obServ.getCurrencies().pipe(map(fp=>fp.filter(data=>data.banCurr))).subscribe((data)=>{
      console.log(data);
    })
  }
  onSearch()
  {
    this.isButClicked1=true;
    this.isButClicked2=false;
    this.obServ.searchData().pipe(map(data=>data.filter(d=>d.banCurr==this.key1||d.amtLimit==this.key2||d.blockAcc==this.key2||d.date==this.key1||d.time==this.key1))).subscribe((data)=>
    {
       this.fpay=data;
    })
  }
  
  onIncorrectData()
  {
    this.isButClicked2=true;
    this.isButClicked1=false;
    this.obServ.getIncorrectData().pipe(map(fpay=>fpay.filter(fp=>fp.amtLimit==undefined||fp.blockAcc==undefined||fp.banCurr=="Select Currency"||fp.date==undefined||fp.time==undefined))).subscribe((response)=>
    {
      this.fpay=response;
    })
  }
  removeData(ids:number)
  {
    console.log(ids);
    this.obServ.removeIncorrectData(ids).then((response)=>
    {
      console.log("Data Removed Successfully");
    })
  }
}
