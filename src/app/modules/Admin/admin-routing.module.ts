import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";


const routes: Routes = [
     {path:'', component:DashboardComponent},
     {path:"aboutus" , component:AboutUsComponent}

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashBoardRoutingModule {
   }