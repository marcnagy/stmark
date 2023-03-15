import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ConfessionData } from '../models/Confession';


@Injectable({
  providedIn: 'root'
})
export class ConfessionService {
  private Signedin :boolean =false;
private url="ConfessionreservationControllor";
  constructor(private http:HttpClient) { }
  public getConfessionByFather(fatherName:string):Observable<ConfessionData[]>{
  
    return this.http.get<ConfessionData[]>(`${environment.apiUrl}/${this.url}/${fatherName}`);
  }
  public getConfession(personID:string):Observable<ConfessionData[]>{
  
    return this.http.get<ConfessionData[]>(`${environment.apiUrl}/${this.url}/${personID}`);

  }
  public addConfession(user:ConfessionData):Observable<ConfessionData[]>{
    return this.http
    .post<ConfessionData[]>(`${environment.apiUrl}/${this.url}`,user);
  }
  public DeleteConfession(id:string,date:string):Observable<ConfessionData[]>{
    return this.http
    .delete<ConfessionData[]>(`${environment.apiUrl}/${this.url}/${id},${date}`);
  }
  
}
