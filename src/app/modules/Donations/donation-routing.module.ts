import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DonationComponent } from "./components/donation/donation.component";
import { PaymentComponent } from "./components/payment/payment.component";

const routes: Routes = [
    {path:'', component:DonationComponent},
    {path:'payment', component:PaymentComponent}

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DonationRoutingModule {
   }