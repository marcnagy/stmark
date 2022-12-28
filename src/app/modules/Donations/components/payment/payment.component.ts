import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Payment } from '../../models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./_payment.component.scss']
})
export class PaymentComponent implements OnInit {
paymentdetail:Payment = new Payment
donationamount:string="300"
  constructor() { }

  ngOnInit(): void {
  }
  submit(login:NgForm){
console.log(login.value)
this,this.paymentdetail.donationamount=this.donationamount
this.paymentdetail.cardnumber= login.value.cardnumber;
this.paymentdetail.cardpin= login.value.Cvv;
this.paymentdetail.CardDate=login.value.carddate ;
this.paymentdetail.CardholderName=login.value.holdername;
this.paymentdetail.donationtype=login.value.paymentMethod;
console.log(this.paymentdetail)

  }

}
