import { Component, OnInit } from '@angular/core';
import { Donation } from '../../models/donation';
import { Router } from '@angular/router';
import { sign_inService } from 'src/app/modules/sign-in/services/person.service';
import { DonationService } from '../../services/donation.service';
import { DynamicCode_inService } from 'src/app/modules/dynamic-code/services/dynamicCodeService';



@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./_donation.component.scss']
})
export class DonationComponent implements OnInit {
  Donation1:Donation= new Donation;
  loggedin:boolean = this.myservice.Signedin
  datashown:string[]=[]
  temp:string|undefined;
  temp2:string|undefined;

  




  constructor(private myrouter:Router,private myservice:sign_inService,private donation:DonationService,private dynamicCode:DynamicCode_inService) { }

  ngOnInit(): void {
    this.dynamicCode.changelang();
    this.datashown=this.dynamicCode.datashown;
    (document.getElementById("myheader") as HTMLInputElement).classList.remove("addtheimg");
  }

  DisplayAmount(){
    (document.getElementById("shown-section") as HTMLInputElement).classList.add("hidden") ;
    (document.getElementById("hidden-section") as HTMLInputElement).classList.remove("hidden") ;
  }
  submit(login:any){
    console.log(login)
    if(!login.valid){
      alert("Please Select all the buttons")
    }
    else{
      this.Donation1=login.value
      if(login.value.recurring=="true")
      this.Donation1.recurring=true;
      else this.Donation1.recurring=false;
      this.Donation1.personID=this.myservice.id;
      console.log(this.Donation1);
      this.donation.MakeDonation(this.Donation1).subscribe(()=>{
        
        alert("please enter your payment data");
      this.donation.amount=this.Donation1.amount;
      this.checkDonation()})
    
    }
  }

  checkDonation(){
      this.myrouter.navigate(["donation/payment"]);
  }

  
}
