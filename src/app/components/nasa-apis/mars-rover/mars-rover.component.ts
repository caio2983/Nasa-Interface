import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../default-layout/default-layout.component';

@Component({
  selector: 'app-mars-rover',
  standalone: true,
  imports: [DefaultLayoutComponent],
  templateUrl: './mars-rover.component.html',
  styleUrl: './mars-rover.component.scss'
})
export class MarsRoverComponent {

}
