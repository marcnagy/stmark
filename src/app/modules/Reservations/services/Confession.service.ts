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
private url1="ConfessionControllor";

  constructor(private http:HttpClient) { }
  public getConfessionByFather(fatherName:string):Observable<ConfessionData[]>{
  
    return this.http.get<ConfessionData[]>(`${environment.apiUrl}/${this.url}/${fatherName}`);
  }
  public getConfession(personID:string):Observable<ConfessionData[]>{
  
    return this.http.put<ConfessionData[]>(`${environment.apiUrl}/${this.url}/${personID}`," ");

  }
  public getFather():Observable<ConfessionData[]>{
  
    return this.http.get<ConfessionData[]>(`${environment.apiUrl}/${this.url1}`);

  }
  public addConfession(personID:string, date:string,fatherName:string):Observable<ConfessionData[]>{
    return this.http
    .post<ConfessionData[]>(`${environment.apiUrl}/${this.url}/${personID},${date},${fatherName}`,'');
  }


  public createConfession(fatherName:string):Observable<ConfessionData[]>{
    return this.http
    .post<ConfessionData[]>(`${environment.apiUrl}/${this.url1}/${fatherName}`,"");
  }
  public DeleteConfession(fatherName:string):Observable<ConfessionData[]>{
    return this.http
    .delete<ConfessionData[]>(`${environment.apiUrl}/${this.url}/${fatherName}`);
  }
  
}
