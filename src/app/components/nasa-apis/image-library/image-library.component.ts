import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from '../../default-layout/default-layout.component';
import {  MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Nasa } from '../../../../services/nasa.services';
import { Item } from '../../../models/nasa-models.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-image-library',
  standalone: true,
  imports: [DefaultLayoutComponent,MatFormFieldModule, MatInputModule,CommonModule,FormsModule,MatProgressSpinnerModule],
  templateUrl: './image-library.component.html',
  styleUrl: './image-library.component.scss'
})
export class ImageLibraryComponent {
  tags : string = "galaxy";
  items! : Item[];
  imgSrc! : any;

  isLoading: boolean = true;  

  

  constructor(private NasaService: Nasa) {
    this.NasaService.getNasaLibrary(this.tags).subscribe((response)=>{
      
      this.items = response.collection.items;
      this.isLoading = false;
     })
  }

  valuechange(event:any) {
    this.isLoading = true ;
    this.NasaService.getNasaLibrary(this.tags).subscribe((response)=>{

      this.items = response.collection.items;
      this.isLoading = false;

     })
     }

   clickIcon(href: string ) {
 
    this.NasaService.getLibraryitem(href).subscribe((response)=>{
      console.log(response);
      this.imgSrc = response[0];
      console.log("IMG SRC",this.imgSrc)

     })

   }

}
