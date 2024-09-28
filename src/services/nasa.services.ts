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
private mars = environment.mars;
    
constructor(private httpClient: HttpClient){}


// Astronomy picture of the day service
getAPOD(date: any): Observable<any> {
  return this.httpClient.get(`${this.apod}/apod/${date}`);
}

// Earth polychromatic images service
getEpic(date: any,date_barra: any): Observable<any> {

let params = new HttpParams();
params = params.set('date_barra', date_barra);


  return this.httpClient.get<Epic[]>(`${this.epic}/epic/${date}`);
}


//Nasa image and videos library service
getNasaLibrary(query: string): Observable<any> {
  let params = new HttpParams();
  params = params.set('q', query);
  
  return this.httpClient.get<NasaImageCollection>(this.library, { params })
          
}

getLibraryitem(href: string) {
  
  return this.httpClient.get<string[]>(href);
}

//Mars rover photos service

getMarsRover(rover_name: string,sol: number): Observable<any> {
  let params = new HttpParams();
  params = params.set('sol', sol);
  params = params.set('rover_name', rover_name);

  return this.httpClient.get(this.mars, { params });
}
}


