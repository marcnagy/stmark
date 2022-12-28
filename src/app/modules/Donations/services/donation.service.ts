import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Donation } from '../models/donation';


@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private Signedin :boolean =false;
  amount:number=0;
private url="DonationControllor";

  constructor(private http:HttpClient) { }
  
 

  public getDonation(personID:string):Observable<Donation[]>{
  
    return this.http.get<Donation[]>(`${environment.apiUrl}/${this.url}/${personID}`);

  }


  public MakeDonation(user:Donation):Observable<Donation[]>{
    return this.http
    .post<Donation[]>(`${environment.apiUrl}/${this.url}`,user);
  }
  
}
