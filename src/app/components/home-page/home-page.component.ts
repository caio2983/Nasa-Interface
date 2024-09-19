import { Component,ViewChild } from '@angular/core';
import { DefaultLayoutComponent } from '../default-layout/default-layout.component';
import { SpaceNews } from '../../../services/spacenews.service';
import { SpacenewsBoxComponent } from '../spacenews/spacenews-box/spacenews-box.component';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DefaultLayoutComponent,SpacenewsBoxComponent,NgbCarouselModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor( private SpaceNewsService : SpaceNews) {
    this.SpaceNewsService.getSpaceNews().subscribe((response)=>{
      console.log(response);
   
 
 
     })
  }


}
