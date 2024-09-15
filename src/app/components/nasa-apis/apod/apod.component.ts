import { Component,ChangeDetectionStrategy } from '@angular/core';
import { DefaultLayoutComponent } from '../../default-layout/default-layout.component';
import { Nasa } from '../../../../services/nasa.services';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';



@Component({
  selector: 'app-apod',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [DefaultLayoutComponent,MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent {

  hdurl!: string;
  explanation! : string;
  title!: string;
  copyright!: string;
  media_type!: string;

  constructor(private NasaService: Nasa){
    this.NasaService.getAPOD().subscribe((response)=>{
     console.log(response);
     this.hdurl = response.hdurl;
     this.explanation = response.explanation;
     this.title = response.title;
     this.copyright = response.copyright;
     this.media_type = response.media_type;
    })
  }

}
 