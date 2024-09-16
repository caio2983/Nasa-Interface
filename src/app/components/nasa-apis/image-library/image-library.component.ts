import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../default-layout/default-layout.component';

@Component({
  selector: 'app-image-library',
  standalone: true,
  imports: [DefaultLayoutComponent],
  templateUrl: './image-library.component.html',
  styleUrl: './image-library.component.scss'
})
export class ImageLibraryComponent {

}
