import { Component,ViewChildren,QueryList,ElementRef,OnInit,AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';
import { DefaultLayoutComponent } from '../../default-layout/default-layout.component';
import {  MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Nasa } from '../../../../services/nasa.services';
import { Item } from '../../../models/nasa-models.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-image-library',
  standalone: true,
  imports: [DefaultLayoutComponent,MatFormFieldModule, MatInputModule,CommonModule,FormsModule,MatProgressSpinnerModule,MatButton],
  templateUrl: './image-library.component.html',
  styleUrl: './image-library.component.scss'
})
export class ImageLibraryComponent { 
  tags : string = "galaxy";
  items! : Item[];
  imgSrc! : any;
  href!: string;

  isLoading: boolean = true;  
  selectedIndex: number = 0; 

  date!: string;
  title!: string;
  description!: string;
  keywords!: string[];
  media_type : string = "image";


  constructor(private NasaService: Nasa) {

    this.NasaService.getNasaLibrary(this.tags).pipe(
   
      switchMap((response) => {
        this.items = response.collection.items;
    
        this.href = this.items[0].href;
        this.title = this.items[0].data[0].title;
        this.date = this.items[0].data[0].date_created;
        this.keywords = this.items[0].data[0].keywords;
        this.description = this.items[0].data[0].description;
        this.media_type = this.items[0].data[0].media_type;
        

  
  
        return this.NasaService.getLibraryitem(this.href);
      })
    ).subscribe(
      (response) => {

        console.log("RESPONNSE GETLIBARY ITEM CONSTRUCTOR", response);
        this.imgSrc = response[0];
        this.isLoading = false;
      },
      (error) => {
 
        console.error("Erro durante as chamadas da API", error);
      }
    );
  }
  


  valuechange(event:any) {

 

    this.isLoading = true ;
    this.NasaService.getNasaLibrary(this.tags).pipe(
   
      switchMap((response) => {
        this.items = response.collection.items;
   
  
        this.href = this.items[0].href;
        this.title = this.items[0].data[0].title;
        this.date = this.items[0].data[0].date_created;
        this.keywords = this.items[0].data[0].keywords;
        this.description = this.items[0].data[0].description;
        this.media_type = this.items[0].data[0].media_type;
        
  

  
  
        return this.NasaService.getLibraryitem(this.href);
      })
    ).subscribe(
      (response) => {

        this.imgSrc = response[0];
        this.isLoading = false;
      },
      (error) => {
 
        console.error("Erro durante as chamadas da API", error);
      }
    );
     }

   clickIcon(href: string,i: number ) {


    console.log("i",this.items[i]) // Tirar os dados da imagem daqui
 
    this.NasaService.getLibraryitem(href).subscribe((response)=>{
 
      this.imgSrc = response[0];

      this.selectedIndex = i;

      this.title = this.items[i].data[0].title;
      this.date = this.items[i].data[0].date_created;
      this.keywords = this.items[i].data[0].keywords;
      this.description = this.items[i].data[0].description;
      this.media_type = this.items[i].data[0].media_type;

      

     })

  
    

   }

}
