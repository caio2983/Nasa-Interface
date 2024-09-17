import { Injectable } from "@angular/core";
import { HttpClient, HttpResponseBase } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { environment } from "../environments/environment";
import { Apod } from "../app/models/nasa-models.model";
import { Epic,Item } from "../app/models/nasa-models.model";
import { HttpParams,HttpResponse } from "@angular/common/http";
import { NasaImageCollection } from "../app/models/nasa-models.model";


@Injectable({
    providedIn: 'root' 
  })

export class Nasa {

private apod = environment.apod;
private epic = environment.epic;
private library = environment.library;
    
constructor(private httpClient: HttpClient){}

getAPOD(date: any): Observable<any> {

  const params = new HttpParams().set('date', date);

  return this.httpClient.get<Apod>(this.apod, { params });
}

getEpic(date: any,date_barra: any): Observable<any> {

  let params = new HttpParams();
params = params.set('date', date);
params = params.set('date_barra', date_barra);


  return this.httpClient.get<Epic[]>(this.epic, { params });
}

getNasaLibrary(query: string): Observable<any> {
  let params = new HttpParams();
  params = params.set('q', query);
  
  return this.httpClient.get<NasaImageCollection>(this.library, { params })
          
}

getLibraryitem(href: string) {
  
  return this.httpClient.get<string[]>(href);
}


}