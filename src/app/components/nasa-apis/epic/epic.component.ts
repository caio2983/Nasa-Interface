import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../default-layout/default-layout.component';
import { Nasa } from '../../../../services/nasa.services';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-epic',
  standalone: true,
  imports: [DefaultLayoutComponent,MatFormFieldModule, MatInputModule, MatDatepickerModule,MatDatepickerInput,DatePipe],
  templateUrl: './epic.component.html',
  styleUrl: './epic.component.scss'
})
export class EpicComponent {

  date! : string | null;

  constructor(private NasaService: Nasa,private datePipe: DatePipe) {
    this.NasaService.getEpic("2024-09-13").subscribe((response)=>{
      console.log(response);
      
 
 
     })
 
  }

  valueChanged(event : any) {
     console.log(event);
     this.date = this.datePipe.transform(event.value,'yyyy-MM-dd'); 

     this.NasaService.getEpic(this.date).subscribe((response)=>{
      console.log(response);
    
 
     })
 
  
  }


}
