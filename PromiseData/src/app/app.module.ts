import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { PaymentComponent } from './Components/payment/payment.component';
import { PromiseApiComponent } from './Components/promise-api/promise-api.component';
import { FraudulentPaymentComponent } from './Components/fraudulent-payment/fraudulent-payment.component';
import { ObservableDataComponent } from './Components/observable-data/observable-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    PromiseApiComponent,
    FraudulentPaymentComponent,
    ObservableDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
