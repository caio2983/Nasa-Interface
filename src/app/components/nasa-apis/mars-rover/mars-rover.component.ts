import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../default-layout/default-layout.component';
import { Nasa } from '../../../../services/nasa.services';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule, DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Photo } from '../../../models/nasa-models.model';



@Component({
  selector: 'app-mars-rover',
  standalone: true,
  imports: [DefaultLayoutComponent,MatFormFieldModule,MatInputModule,CommonModule,MatSelectModule,FormsModule],
  templateUrl: './mars-rover.component.html',
  styleUrl: './mars-rover.component.scss'
})
export class MarsRoverComponent {
  selected_rover = 'curiosity';
  selected_sol = 1000;
  image_src! : string;
  response_photos! : any;

   
  constructor(private NasaService: Nasa,private datePipe: DatePipe) {
    this.NasaService.getMarsRover(this.selected_rover,this.selected_sol).subscribe((response)=>{
      console.log(response);
      this.response_photos = response.photos;

      console.log("RESPONSE_PHOTOS",this.response_photos)
     })

     
  }

  valueChange(event : any) {
    console.log(event);


 }

  clickIcon(imgsrc : string): void {
   this.image_src = imgsrc; 
  }
  
}
