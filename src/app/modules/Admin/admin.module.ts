import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DashBoardRoutingModule } from './admin-routing.module';


@NgModule({
    declarations:[
        DashboardComponent,
        AboutUsComponent

  ],
    imports:[
        CommonModule,
        FormsModule,
        DashBoardRoutingModule
    ]
})
export class DashboardModule{}