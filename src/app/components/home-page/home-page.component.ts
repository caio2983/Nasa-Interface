import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../default-layout/default-layout.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DefaultLayoutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
