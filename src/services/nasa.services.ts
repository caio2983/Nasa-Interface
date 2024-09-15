import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { environment } from "../environments/environment";
import { Apod } from "../app/models/nasa-models.model";


@Injectable({
    providedIn: 'root' 
  })

export class Nasa {

private api = environment.api;
    
constructor(private httpClient: HttpClient){}

getAPOD(): Observable<any> {
    return this.httpClient.get<Apod>(this.api); // Retorna um Observable com os dados
  }
}