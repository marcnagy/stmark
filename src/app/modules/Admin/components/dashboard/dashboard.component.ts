import { Component, OnInit } from '@angular/core';
import { HolyMass } from 'src/app/modules/Reservations/models/HolyMass';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./_dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
AddedMass:HolyMass= new HolyMass
  constructor() { }

  ngOnInit(): void {
  }
  AddMassData(login:any)
{
console.log(login.value)
this.AddedMass=login.value
console.log(this.AddedMass)

}
AddFatherData(login:any){
  console.log(login)

}
}
