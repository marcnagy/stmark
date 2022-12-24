import { Component, OnInit } from '@angular/core';
import { HolyMass } from 'src/app/modules/Reservations/models/HolyMass';
import { ConfessionService } from 'src/app/modules/Reservations/services/Confession.service';
import { HolyMassService } from 'src/app/modules/Reservations/services/HolyMass.service';
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
  constructor(private myservice:sign_inService,private holyMassService:HolyMassService,private confessionService:ConfessionService) { }

  ngOnInit(): void {
    this.holyMassService.GetHolyMass("all","all","all ").subscribe( (person:HolyMass[])=>{
      for(let i=0;i<person.length;i++){
        this.allmasses.push(person[i])
      }
     });
  }
  AddMassData()
{
  

if(this.AddedMass.capacity==null 
  || this.AddedMass.date==null 
  || this.AddedMass.endTime==null 
  || this.AddedMass.startTime==null
  || this.AddedMass.location==null ){
    alert("please fill in all the fields")
  }
  else{
    this.holyMassService.addHolyMass(this.AddedMass).subscribe(()=>{alert("holymass added successfully")})
    this.allmasses.push(this.AddedMass)
  }



}
AddFatherData(){
if(this.AddedFather==''){
  alert("please enter the name of the father u want to add or delete")
}
else{
  this.confessionService.createConfession(this.AddedFather).subscribe(()=>{alert("father added successfully")})
}
}
Delete(){
  if(this.AddedFather==''){
    alert("please enter the name of the father u want to add or delete")
  }
  else{
    this.confessionService.DeleteConfession(this.AddedFather).subscribe(()=>{alert("father deleted successfully")})
  }

}
}
