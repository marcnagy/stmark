import { Component, OnInit } from '@angular/core';
import { sign_inService } from 'src/app/modules/sign-in/services/person.service';
import { ConfessionData } from '../../models/Confession';
import { HolyMass } from '../../models/HolyMass';
import { HolyMassReservation } from '../../models/HolyMassReservation';
import { ConfessionService } from '../../services/Confession.service';
import { HolyMassService } from '../../services/HolyMass.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./_reserve.component.scss']
})
export class ReserveComponent implements OnInit {
  Verse1:string="For a just man falleth seven times, and riseth up again: but the wicked shall fall into mischief. ~Proverbs 24:16"
  Verse2 :string="Whoso eateth my flesh, and drinketh my blood, hath eternal life; and I will raise him up at the last day ~John 6:54"
  id:string="HolyMass";
  mass:HolyMass=new HolyMass;
  mass1:HolyMass=new HolyMass;
  mass2:HolyMass=new HolyMass;
  loggedUser:string=this.myservice.firstName
  fathers:string[]=[];

  test:ConfessionData = new ConfessionData;
  oldConfessions:ConfessionData[]=[];
  masses:HolyMass[]=[];
  resMasses:HolyMass[]=[];
  resConf:ConfessionData[]=[];
  startimes:string[]=[];
  locations:string[]=[];
   user:ConfessionData=new ConfessionData;
  user2:HolyMassReservation=new HolyMassReservation;

  constructor(private myservice:sign_inService,private holyMassService:HolyMassService,private confessionService:ConfessionService) { }

  ngOnInit(): void {
    this.holyMassService.getTime().subscribe( (person)=>{
      for(let i=0;i<person.length;i++){
        this.startimes.push(person[i].startTime)
      }
     });
     this.holyMassService.getLocation().subscribe( (person)=>{
      for(let i=0;i<person.length;i++){
        this.locations.push(person[i].location)
      }
     });
    this.holyMassService.GetHolyMass("all","all","all ").subscribe( (person:HolyMass[])=>{
      for(let i=0;i<person.length;i++){
        this.masses.push(person[i])
      }
     });
     
     this.holyMassService.getHolyMassReservation(this.myservice.id).subscribe( (person:HolyMassReservation[])=>{
      for(let i=0;i<person.length;i++){
        for(let j=0;j<this.masses.length;j++){
          if(person[i].holyMassID==this.masses[j].holyMassID)
        {  this.resMasses.push(this.masses[j]);
          console.log(this.masses[j]) ;
          break}
      }
     }
    });
 
     this.confessionService.getConfession(this.myservice.id).subscribe( (person)=>{
      for(let i=0;i<person.length;i++){
                this.oldConfessions.push(person[i]);
                console.log(person[i])
                
      }
     });
     this.confessionService.getFather().subscribe( (person)=>{
      for(let i=0;i<person.length;i++){
                this.fathers.push(person[i].fatherName);
                console.log(person[i])
                
      }
     });
   
    (document.getElementById("myheader") as HTMLInputElement).classList.add("addtheimg");
    (document.getElementById(this.id) as HTMLInputElement).classList.add("active");

  
   



  }
  GetConfessionData(login:any){
    if(this.test.fatherName==''||this.test.date==''){alert("please pick all data");}
    else{
      this.confessionService.addConfession(this.myservice.id,this.test.date,this.test.fatherName).subscribe((person)=>{
    alert("confession reserved successfully");
    this.oldConfessions.push(this.test);
   });}
   
  }
  GetMassData(login:any){
    if(this.mass2.date==''||this.mass2.location==' '||this.mass2.startTime==' '){alert("please pick all data");}
    else{
for(let i=0;i<this.masses.length;i++){
    if(this.masses[i].date==this.mass2.date&&this.masses[i].startTime==this.mass2.startTime&&this.masses[i].location==this.mass2.location)
    {this.user2.holyMassID=this.masses[i].holyMassID;
      this.mass2.endTime=this.masses[i].endTime;
      this.masses[i].capacity-=1;
      this.resMasses.push(this.masses[i]);
    }
   }
   this.user2.date=this.mass2.date;
   this.user2.personID=this.myservice.id;
if(this.user2.holyMassID==0){
alert("unavailable holly mass please choose a valid one using data in the upcoming table")
}
else{    this.holyMassService.addHolyMassReservation(this.user2).subscribe( ()=>{
  alert("reserved successful");
 },
 (error) =>{alert("hollyMass already reserved");
 this.resMasses.pop()});  
 this.holyMassService.Decrease(this.mass2.location,this.mass2.startTime,this.mass2.endTime).subscribe();
}
  }
}

  ChangeTab( id:any){
    (document.getElementById("Confession") as HTMLInputElement).classList.remove("active");
    (document.getElementById("HolyMass") as HTMLInputElement).classList.remove("active");
    this.id=id;
    (document.getElementById(id) as HTMLInputElement).classList.add("active")
  }

  Reserve(){

  }
  CancelReservation(){
    var isSelected:boolean=false;
    var allmasses=(document.getElementsByClassName("checkbox-delete"))
    console.log(allmasses)
    for(let i=0;i<allmasses.length;i++){
      if(((document.getElementsByClassName("checkbox-delete")[i] as HTMLInputElement).checked)==true){
      isSelected=true;
      }
    }
    if(isSelected){
      var isconfirm = confirm("are u sure u want to delete the selected reservations")
      if(isconfirm){
        for(let i=0;i<allmasses.length;i++){
      if(((document.getElementsByClassName("checkbox-delete")[i] as HTMLInputElement)?.checked)){
        this.holyMassService.DeleteReservation(this.myservice.id,this.resMasses[i].date).subscribe(()=>{this.resMasses.splice(i,1);
          this.masses[i].capacity+=1;
 this.holyMassService.Increase(this.resMasses[i].location,this.resMasses[i].startTime,this.resMasses[i].endTime).subscribe();
        alert("reservation canceled")});
       
      }
      }
      } 
      
    }
    else{
      alert("please Select the wanted Masses to delete")
    }
    
    }
  
      
      }

  

