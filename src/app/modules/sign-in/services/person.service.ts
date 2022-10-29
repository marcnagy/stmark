import { Injectable } from '@angular/core';
import { person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
  public getPerson():person[]{
    let x=new person();
    x.National_ID="30194285744821";
    x.First_Name="Marc";
    x.Second_Name="Sorial";
    x.Email="mnaguiyoussef@gmail.com";
    x.Phone_Number="01274775167";
    return [x];

  }
}
