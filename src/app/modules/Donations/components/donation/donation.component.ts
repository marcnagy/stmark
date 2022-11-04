import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  submit(login:NgForm){
    console.log(login);
  }

  GetDonationData(entity:string,frequency:string,amount:number){
    this.Donation1.donationentity=entity;
    this.Donation1.donationfrequency=frequency;
    this.Donation1.donationvalue=amount;
    (this.Donation1.donationvalue) as number;
    console.log(this.Donation1);

  }
}
