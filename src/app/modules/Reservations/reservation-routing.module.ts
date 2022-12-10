import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReserveComponent } from "./Components/reserve/reserve.component";


const routes: Routes = [
     {path:'', component:ReserveComponent},
    // {path:'payment', component:PaymentComponent}

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ReservationRoutingModule {
   }