import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../default-layout/default-layout.component';
import { SpaceNews } from '../../../services/spacenews.service';
import { SpacenewsBoxComponent } from '../spacenews/spacenews-box/spacenews-box.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DefaultLayoutComponent,SpacenewsBoxComponent],
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
