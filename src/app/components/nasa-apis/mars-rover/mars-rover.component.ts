import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../default-layout/default-layout.component';
import { Nasa } from '../../../../services/nasa.services';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule, DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Photo } from '../../../models/nasa-models.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@Component({
  selector: 'app-mars-rover',
  standalone: true,
  imports: [DefaultLayoutComponent,MatFormFieldModule,MatInputModule,CommonModule,MatSelectModule,FormsModule,MatProgressSpinnerModule],
  templateUrl: './mars-rover.component.html',
  styleUrl: './mars-rover.component.scss'
})
export class MarsRoverComponent {
  selected_rover = 'curiosity';
  selected_sol = 1000;
  image_src! : string;
  response_photos! : any;

  isLoading: boolean = true;  

   
  constructor(private NasaService: Nasa,private datePipe: DatePipe) {
    this.NasaService.getMarsRover(this.selected_rover,this.selected_sol).subscribe((response)=>{
   
      this.response_photos = response.photos;
   
      this.isLoading = false;

     })

     
  }

  valueChange(event : any) {
    this.isLoading = true;
    this.NasaService.getMarsRover(this.selected_rover,this.selected_sol).subscribe((response)=>{
   
      this.response_photos = response.photos;
   
      this.isLoading = false;

     })


 }

  clickIcon(imgsrc : string): void {
   this.image_src = imgsrc; 
  }
  
}
