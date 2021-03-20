import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from './Classes/country';
import { CountryDataService } from './Services/country-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title="First Page";
  constructor(private route:Router)
  {
  }
  onPaymentBut()
  {
    this.route.navigate(['payment']);
  }
  onPromiseBut()
  {
    this.route.navigate(['promise']);
  }
  onFraudPayBut()
  {
    this.route.navigate(['fraudPayment']);
  }
  onObservableBut()
  {
    this.route.navigate(['observable']);
  }
}
