import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from '../../default-layout/default-layout.component';
import {  MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Nasa } from '../../../../services/nasa.services';

@Component({
  selector: 'app-image-library',
  standalone: true,
  imports: [DefaultLayoutComponent,MatFormFieldModule, MatInputModule,CommonModule,FormsModule],
  templateUrl: './image-library.component.html',
  styleUrl: './image-library.component.scss'
})
export class ImageLibraryComponent {
  tags : string = "galaxy";

  constructor(private NasaService: Nasa) {
    this.NasaService.getNasaLibrary(this.tags).subscribe((response)=>{
      console.log(response);
      
 
 
     })
  }

  valuechange(event:any) {
    this.NasaService.getNasaLibrary(this.tags).subscribe((response)=>{
      console.log(response);
     })
     }

}
