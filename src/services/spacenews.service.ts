import { Injectable } from "@angular/core";
import { HttpClient, HttpResponseBase, HttpParams,HttpResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { environment } from "../environments/environment";
import { ArticleResults } from "../app/models/spacenews-models.model";

@Injectable({
    providedIn: 'root' 
  })

  export class SpaceNews {
    private spacenews = environment.spacenews;

    constructor(private httpClient: HttpClient){}

    getSpaceNews() : Observable<any> {
        return this.httpClient.get<ArticleResults>(this.spacenews);
    }
  }

  