import { Component,NgModule,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from '../../default-layout/default-layout.component';
import { Nasa } from '../../../../services/nasa.services';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Epic } from '../../../models/nasa-models.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-epic',
  standalone: true,
  imports: [DefaultLayoutComponent,MatFormFieldModule, MatInputModule, MatDatepickerModule,MatDatepickerInput,DatePipe,CommonModule,MatProgressSpinnerModule],

  templateUrl: './epic.component.html',
  styleUrl: './epic.component.scss'
})
export class EpicComponent {

  date! : string | null;
  date_barra! : string | null;
  images_data! : Epic[];
  image_links! : string[]; 
  image_src! : string;

  isLoading: boolean = true;  


  constructor(private NasaService: Nasa,private datePipe: DatePipe) {
    this.NasaService.getEpic("2024-09-13","2024/09/13").subscribe((response)=>{
      console.log(response);
      this.images_data = response;
      this.image_links = response.image_links;

      this.isLoading = false;


  
     })

     
 
  }


  valueChanged(event : any) {
     console.log(event);
     this.date = this.datePipe.transform(event.value,'yyyy-MM-dd'); 
     this.date_barra = this.datePipe.transform(event.value,'yyyy/MM/dd'); 

    
     this.isLoading = true ;

     this.NasaService.getEpic(this.date,this.date_barra).subscribe((response)=>{
      console.log(response);
      console.log("IMAGES LINKS",response.image_links);
      this.images_data = response;
      this.image_links = response.image_links;

      this.isLoading = false;
    
 
     })
 
  }

  
clickIcon(imageLink: string,i : number): void {
  this.image_src = imageLink;

  const previouslySelected = document.querySelector('.selected');
if (previouslySelected) {
  previouslySelected.classList.remove('selected');
}


const element = document.getElementById('image-icon-' + i);
if (element) {
  element.classList.add('selected');
}
}





}
