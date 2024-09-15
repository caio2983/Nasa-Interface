import { Component,NgModule } from '@angular/core';
import { DefaultLayoutComponent } from '../../default-layout/default-layout.component';
import { Nasa } from '../../../../services/nasa.services';


@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [DefaultLayoutComponent],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent {

  hdurl!: string;
  explanation! : string;
  title!: string;
  copyright!: string;

  constructor(private NasaService: Nasa){
    this.NasaService.getAPOD().subscribe((response)=>{
     console.log(response);
     this.hdurl = response.hdurl;
     this.explanation = response.explanation;
     this.title = response.title;
     this.copyright = response.copyright;
    })
  }

}
 