import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from '../../default-layout/default-layout.component';
import { Nasa } from '../../../../services/nasa.services';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatDatepickerInput } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { provideNativeDateAdapter} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-apod',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [DefaultLayoutComponent,MatFormFieldModule,CommonModule ,MatInputModule, MatDatepickerModule,MatDatepickerInput,DatePipe,MatProgressSpinnerModule],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent {
  minDate: Date = new Date(1995, 6, 16);
  maxDate : Date = new Date();

  hdurl!: string;
  explanation! : string;
  title!: string;
  copyright!: string;
  media_type!: string;
  date! : string | null;
  isLoading: boolean = true;  

  
 

  constructor(private NasaService: Nasa,private datePipe: DatePipe){
    this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd') ;


    
    this.NasaService.getAPOD(this.date).subscribe((response)=>{

     this.hdurl = response.hdurl;
     this.explanation = response.explanation;
     this.title = response.title;
     this.copyright = response.copyright;
     this.date = response.date;
     this.media_type = response.media_type;

     this.isLoading = false;


    })
  }

  valueChanged(event : any) {

     this.date = this.datePipe.transform(event.value,'yyyy-MM-dd'); 


     this.isLoading = true ;
     this.NasaService.getAPOD(this.date).subscribe((response)=>{
   
      this.hdurl = response.hdurl;
      this.explanation = response.explanation;
      this.title = response.title;
      this.copyright = response.copyright;
      this.media_type = response.media_type;

      this.isLoading = false;
 
 
     })
  
  }

}
 