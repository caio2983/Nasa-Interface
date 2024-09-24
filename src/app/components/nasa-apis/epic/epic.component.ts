import { Component,NgModule,OnInit,AfterViewInit,AfterContentInit,afterRender,ViewChild,ElementRef,QueryList,ViewChildren,AfterViewChecked } from '@angular/core';
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
import { Renderer2 } from '@angular/core';

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
  image_links : string[] = []; 
  image_src! : string;
  identifier! : string;
  isLoading: boolean = true;  

  @ViewChildren('icon') icons!: QueryList<ElementRef>;
  selectedIndex: number = 0; 


   ngAfterViewChecked(): void {

    this.selectedIndex = 0;
  }

  
  



  constructor(private NasaService: Nasa,private datePipe: DatePipe,private el: ElementRef, private renderer: Renderer2 ) {
    this.NasaService.getEpic("2024-09-13","2024/09/13").subscribe((response)=>{
      console.log(response);
      this.images_data = response;
      this.image_links = response.image_links;
      this.image_src = response.image_links[0];
      this.isLoading = false;
     })

  }

 

  


  valueChanged(event : any) {

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

  
  clickIcon(imageLink: string,index: number): void {
    this.image_src = imageLink;
    this.selectedIndex = index;
  }


}
