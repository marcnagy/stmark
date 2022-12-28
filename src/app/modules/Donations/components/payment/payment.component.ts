import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DynamicCode_inService } from 'src/app/modules/dynamic-code/services/dynamicCodeService';
import { Donation } from '../../models/donation';
import { Payment } from '../../models/payment';
import { DonationService } from '../../services/donation.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./_payment.component.scss']
})
export class PaymentComponent implements OnInit {
paymentdetail:Payment = new Payment
donate:Donation=new Donation
donationamount:number=0
datashown:string[]=[]

  constructor(private paymentService:DonationService,private dynamicCode:DynamicCode_inService) { }

  ngOnInit(): void {
    this.dynamicCode.changelang();
    this.datashown=this.dynamicCode.datashown;
    this.donationamount=this.paymentService.amount
  }
  submit(login:NgForm){
console.log(login.value)
this.paymentdetail.donationamount=this.donationamount
this.paymentdetail.cardnumber= login.value.cardnumber;
this.paymentdetail.cardpin= login.value.Cvv;
this.paymentdetail.CardDate=login.value.carddate ;
this.paymentdetail.CardholderName=login.value.holdername;
this.paymentdetail.donationtype=login.value.paymentMethod;
console.log(this.paymentdetail)

  }

}
