import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SigninModel } from '../models/signin';


@Injectable({
  providedIn: 'root'
})
export class sign_inService {
private url="SigninControllor";
  firstName:string='';
  username:any;
  Signedin: boolean=false;
  constructor(private http:HttpClient) { }
  public getPerson(id:string,phonenumber:string):Observable<SigninModel>{
  
    return this.http.get<SigninModel>(`${environment.apiUrl}/${this.url}/${id},${phonenumber}`);

  }
  public getPersons():Observable<SigninModel[]>{
  
    return this.http.get<SigninModel[]>(`${environment.apiUrl}/${this.url}`);

  }

  //trial
  refreshmypage(){
  let element: HTMLElement = document.getElementById("header-but") as HTMLElement;
  element.click();
}
  }
  
