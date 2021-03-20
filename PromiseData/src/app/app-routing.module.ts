import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FraudulentPaymentComponent } from './Components/fraudulent-payment/fraudulent-payment.component';
import { ObservableDataComponent } from './Components/observable-data/observable-data.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { PromiseApiComponent } from './Components/promise-api/promise-api.component';

const routes: Routes = [
  {path:'payment',component:PaymentComponent},
  {path:'promise',component:PromiseApiComponent},
  {path:'fraudPayment',component:FraudulentPaymentComponent},
  {path:'observable',component:ObservableDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
