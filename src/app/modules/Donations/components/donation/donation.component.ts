import { Component, OnInit } from '@angular/core';
import { Donation } from '../../models/donation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {
  Donation1:Donation= new Donation;

  constructor(private myrouter:Router) { }

  ngOnInit(): void {
  }

  DisplayAmount(){
    (document.getElementById("shown-section") as HTMLInputElement).classList.add("hidden") ;
    (document.getElementById("hidden-section") as HTMLInputElement).classList.remove("hidden") ;
  }
  submit(login:any){
    console.log(login.value)
    this.Donation1=login.value
    console.log(this.Donation1.donationentity);
    console.log(this.Donation1.donationfrequency);
    console.log(this.Donation1.donationamount);
    this.checkDonation()
  }

  checkDonation(){
    if(this.Donation1.donationamount != '' && this.Donation1.donationentity!='' && this.Donation1.donationfrequency!=''){
      this.myrouter.navigate(["donation/payment"]);
  }

  }

  
}
