import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
    declarations:[
        DashboardComponent,
        AboutUsComponent

  ],
    imports:[
        CommonModule,
        FormsModule,
    ]
})
export class DashboardModule{}