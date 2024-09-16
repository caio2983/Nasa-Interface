import { Component,ChangeDetectionStrategy } from '@angular/core';
import { DefaultLayoutComponent } from '../../default-layout/default-layout.component';
import { Nasa } from '../../../../services/nasa.services';
import { DatePipe } from '@angular/common';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import { MatDatepickerInput } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NativeDateAdapter, provideNativeDateAdapter} from '@angular/material/core';



@Component({
  selector: 'app-apod',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [DefaultLayoutComponent,MatFormFieldModule, MatInputModule, MatDatepickerModule,MatDatepickerInput,DatePipe],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent {

  hdurl!: string;
  explanation! : string;
  title!: string;
  copyright!: string;
  media_type!: string;
  date! : string | null;

  constructor(private NasaService: Nasa,private datePipe: DatePipe){
    this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd') ;

    console.log(this.date);
    
    this.NasaService.getAPOD(this.date).subscribe((response)=>{
     console.log(response);
     this.hdurl = response.hdurl;
     this.explanation = response.explanation;
     this.title = response.title;
     this.copyright = response.copyright;
     this.media_type = response.media_type;


    })


  
  }

  valueChanged(event : any) {
     console.log(event)
     this.date = this.datePipe.transform(event.value,'yyyy-MM-dd'); 
     console.log(this.date);
     this.NasaService.getAPOD(this.date).subscribe((response)=>{
      console.log(response);
      this.hdurl = response.hdurl;
      this.explanation = response.explanation;
      this.title = response.title;
      this.copyright = response.copyright;
      this.media_type = response.media_type;
 
 
     })
  
  }

}
 