import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sign_inService } from 'src/app/modules/sign-in/services/person.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./_nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
Alert(){
  alert("hey there")
}
  constructor(private myrouter:Router,private myservice:sign_inService) { }

  ngOnInit(): void {
  }
// addimg(){
//   (document.getElementById("myheader") as HTMLInputElement).classList.add("addtheimg");
// }

GotoDonations(){
  if(this.myservice.Signedin ==false){
  alert("You need to be Logged in First Before Donating")
  }
  else{
    this.myrouter.navigate(['donation'])
  }
}
GotoReservations(){
  
    if(this.myservice.Signedin ==false){
    alert("You need to be Logged in First Before reserving")
    }
    else{
      this.myrouter.navigate(['reserve'])
    
}

}
}
