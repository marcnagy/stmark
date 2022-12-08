import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReservationRoutingModule } from './reservation-routing.module';
import { ReserveComponent } from './Components/reserve/reserve.component';

@NgModule({
    declarations:[
    ReserveComponent
  ],
    imports:[
        CommonModule,
        FormsModule,
        ReservationRoutingModule,
    ]
})
export class ReservationModule{}