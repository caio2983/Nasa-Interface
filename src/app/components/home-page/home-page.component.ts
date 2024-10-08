import { Component,ViewChild } from '@angular/core';
import { DefaultLayoutComponent } from '../default-layout/default-layout.component';
import { SpaceNews } from '../../../services/spacenews.service';
import { SpacenewsBoxComponent } from '../spacenews/spacenews-box/spacenews-box.component';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DefaultLayoutComponent,SpacenewsBoxComponent,NgbCarouselModule,RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  carousel_data :  any = []

  constructor( private SpaceNewsService : SpaceNews) {
    this.SpaceNewsService.getSpaceNews().subscribe((response)=>{
      
       for (let item of response.results){
         this.carousel_data.push({
          "image_url" :  item.image_url,
          "title" :  item.title,
          "summary" : item.summary,
          "url" : item.url,
          "news_site": item.news_site,
          "published_at": item.published_at

         })
       }

     })
   
  }


}
