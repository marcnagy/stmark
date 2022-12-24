import { Component, OnInit } from '@angular/core';
import { HolyMass } from 'src/app/modules/Reservations/models/HolyMass';
import { sign_inService } from 'src/app/modules/sign-in/services/person.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./_dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
AddedMass:HolyMass= new HolyMass
allmasses:HolyMass[]=[]
AddedFather:string=''
isAdmin:boolean=this.myservice.isAdmin
  constructor(private myservice:sign_inService) { }

  ngOnInit(): void {
  }
  AddMassData()
{
  
console.log(this.AddedMass)
if(this.AddedMass.capacity==null 
  || this.AddedMass.date==null 
  || this.AddedMass.endTime==null 
  || this.AddedMass.startTime==null
  || this.AddedMass.location==null ){
    alert("please fill in all the fields")
  }
  else{
    //do the function here
    this.allmasses.push(this.AddedMass)
  }



}
AddFatherData(){
if(this.AddedFather==''){
  alert("please enter the name of the father u want to add or delete")
}
else{
  //do the function here
}
}
Delete(){
  if(this.AddedFather==''){
    alert("please enter the name of the father u want to add or delete")
  }
  else{
    //do the function here
  }

}
}
