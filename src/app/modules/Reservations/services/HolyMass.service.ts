import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HolyMass } from '../models/HolyMass';
import { HolyMassReservation } from '../models/HolyMassReservation';


@Injectable({
  providedIn: 'root'
})
export class HolyMassService {
  private Signedin :boolean =false;
private url="holymassControllor";
private url1="holymassreservationControllor";
  constructor(private http:HttpClient) { }
  
  public getTime():Observable<string[]>{
  
    return this.http.get<string[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getLocation():Observable<string[]>{
  
    return this.http.put<string[]>(`${environment.apiUrl}/${this.url}`," ");
  }

  public getHolyMassReservation(personID:string):Observable<HolyMassReservation[]>{
  
    return this.http.get<HolyMassReservation[]>(`${environment.apiUrl}/${this.url1}/${personID}`);

  }


  public addHolyMass(user:HolyMass):Observable<HolyMass[]>{
    return this.http
    .post<HolyMass[]>(`${environment.apiUrl}/${this.url}`,user);
  }


  public addHolyMassReservation(user:HolyMassReservation):Observable<HolyMassReservation[]>{
    return this.http
    .post<HolyMassReservation[]>(`${environment.apiUrl}/${this.url1}`,user);
  }

  public Increase(location:string,start:string,end:string){
     this.http
    .delete<HolyMass[]>(`${environment.apiUrl}/${this.url}/${location},${start},${end}`);
  }
  public Decrease(location:string,start:string,end:string){
     this.http.put<HolyMass[]>(`${environment.apiUrl}/${this.url}/${location},${start},${end}`, 'Angular PUT Request Example' );

  }
  public GetHolyMass(location:string,start:string,date:string){
    this.http.get<HolyMass[]>(`${environment.apiUrl}/${this.url}/${location},${start},${date}`);

 }
  public DeleteReservation(id:string,date:string):Observable<HolyMassReservation[]>{
    return this.http
    .delete<HolyMassReservation[]>(`${environment.apiUrl}/${this.url1}/${id},${date}`);
  }
  public DeleteMass(location:string,start:string,date:string):Observable<HolyMass[]>{
    return this.http
    .delete<HolyMass[]>(`${environment.apiUrl}/${this.url}/${location},${start},${date}`);
  }
}
