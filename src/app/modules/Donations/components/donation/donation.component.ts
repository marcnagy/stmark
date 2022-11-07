import { Component, OnInit } from '@angular/core';
import { Donation } from '../../models/donation';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {
  Donation1:Donation= new Donation;

  constructor() { }

  ngOnInit(): void {
  }

  DisplayAmount(){
    (document.getElementById("shown-section") as HTMLInputElement).classList.add("hidden") ;
    (document.getElementById("hidden-section") as HTMLInputElement).classList.remove("hidden") ;
  }
  submit(login:any){
    this.Donation1=login.value
    console.log(this.Donation1.donationentity);
    console.log(this.Donation1.donationfrequency);
    console.log(this.Donation1.donationamount);
  }

  
}
