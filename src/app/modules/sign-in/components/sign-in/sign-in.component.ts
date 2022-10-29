import { Component, OnInit } from '@angular/core';
import { person } from '../../model/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  title="sign in";
  personA:person[]=[];
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.personA=this.personService.getPerson();
    console.log(this.personA);
  }

}
