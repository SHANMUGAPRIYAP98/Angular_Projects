import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Country } from 'src/app/Classes/country';
import { CountryDataService } from 'src/app/Services/country-data.service';

@Component({
  selector: 'app-promise-api',
  templateUrl: './promise-api.component.html',
  styleUrls: ['./promise-api.component.css']
})
export class PromiseApiComponent implements OnInit {
  title="Promise Api";
  ngOnInit(): void {
  }
  con:Country[]=[];
  custTypes:string[]=["Loyal customers","Impulse customers","Discount customers","Need-based customers","Wandering customers"]
  currency:string[]=["INR","USD","EUR","RUB","SGD","KHR","MYR","CNY","IRR","NGN"]
  creditTypes:string[]=["Visa","MasterCard","American Express","Discover"]
  counList:string[]=["INDIA","USA","ESTONIA","RUSSIA","SINGAPORE"," MALAYSIA","CONGO","CHINA","IRAN","NIGERIA"]
  cityList:string[]=["CHENNAI","NEW YORK","TARTU","MOSCOW","JURONG","GEORGE TOWN","GOMA","BEIJING","SHIRAZ","LAGOS"]
  cid:number;
  id: number;
  cusType: string;
  creditType: string;
  curr: string;
  counName: string;
  cityName: string;
  fields=["id","cusType","creditType","curr","counName","cityName"]
  dbUrl=" http://localhost:3000/country";
  constructor(private conServ:CountryDataService,private http:HttpClient){}
  coun:Country;
  isClicked=false;
  onButtonClick()
  {
    let coun:Country;
    coun=new Country(this.id,this.cusType,this.creditType,this.curr,this.counName,this.cityName);
    this.conServ.setCountryData(coun).then((data)=>
    {
      console.log("Data Inserted Successfully!!"+"\n"+data)
    }).catch((err)=>{console.log(err)}).finally(()=>{
      console.log("Finally Block");
    })
  }
  onFetchData()
  {
    this.isClicked=true;
    this.conServ.getCountryData().toPromise().then((data)=>
    {
      this.con=data;
    }).catch((error)=>
    {
      console.log(error);
    }).finally(()=>
    {
      console.log("Country Data is Displayed")
    });
  }
  count:Country[];
  onGetConData()
  {
    this.isClicked=true;
    this.conServ.getConData().pipe(map(data=>data.filter(c=>c.id==this.cid))).subscribe((res)=>
     {
      this.con=res;
     })
    /* this.conServ.getCounData(this.cid).then((data)=>
     {
       console.log(this.count)
     })*/
  }
}
