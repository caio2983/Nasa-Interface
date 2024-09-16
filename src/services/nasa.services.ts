import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { environment } from "../environments/environment";
import { Apod } from "../app/models/nasa-models.model";
import { Epic } from "../app/models/nasa-models.model";
import { HttpParams,HttpResponse } from "@angular/common/http";


@Injectable({
    providedIn: 'root' 
  })

export class Nasa {

private apod = environment.apod;
private epic = environment.epic;
    
constructor(private httpClient: HttpClient){}

getAPOD(date: any): Observable<any> {

  const params = new HttpParams().set('date', date);

  return this.httpClient.get<Apod>(this.apod, { params });
}

getEpic(date: any): Observable<any> {

  const params = new HttpParams().set('date', date);

  return this.httpClient.get<Epic[]>(this.epic, { params });
}
}