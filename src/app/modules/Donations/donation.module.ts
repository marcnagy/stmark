import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DonationRoutingModule } from './donation-routing.module';
import { DonationComponent } from './components/donation/donation.component';

@NgModule({
    declarations:[
        

    
    DonationComponent
  ],
    imports:[
        CommonModule,
        FormsModule,
        DonationRoutingModule,
        


    ]

})
export class DonationModule{}