import { Component, OnInit } from '@angular/core';
import { sign_inService } from 'src/app/modules/sign-in/services/person.service';
import { ConfessionData } from '../../models/Confession';
import { HolyMass } from '../../models/HolyMass';

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

  test:ConfessionData = new ConfessionData;
  oldConfessions:ConfessionData[]=[];
  masses:HolyMass[]=[];
  


  constructor(private myservice:sign_inService) { }

  ngOnInit(): void {
    (document.getElementById("myheader") as HTMLInputElement).classList.add("addtheimg");
    (document.getElementById(this.id) as HTMLInputElement).classList.add("active");
    

   this.mass.day="26/10/2022";
   this.mass.prayer="mass";
   this.mass.place="main";
   this.mass.starttime='07:30';
   this.mass.altar="virgin Mary"
   this.mass.endtime="10:30";
   this.mass.AvailablePlaces=195;

   this.mass1.day="30/10/2022";
   this.mass1.prayer="mass";
   this.mass1.place="new bld";
   this.mass1.altar="youssefNagar"
   this.mass1.starttime='09:30';
   this.mass1.endtime="11:30";
   this.mass1.AvailablePlaces=356;

   this.masses.push(this.mass);
   this.masses.push(this.mass1);



  }
  GetConfessionData(login:any){
    if(this.test.Fathername ==null || this.test.ConfessionDay ==null){
      alert("please choose all the fileds")
    }
    else{
        console.log(this.test);

    }

  }
  GetMassData(login:any){
    if(this.mass2.place==null || this.mass2.TimeSlot==null || this.mass2.day==null){
      alert("please choose al the fields")
    }
    else{
          console.log(this.mass2);

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
        console.log("true",i)
        this.masses.splice(i,1);
      }
      }
      } 
      
    }
    else{
      alert("please Select the wanted Masses to delete")
    }
    
    }
  
      
      }

  

