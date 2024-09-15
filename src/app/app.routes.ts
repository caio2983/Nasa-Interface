import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ApodComponent } from './components/nasa-apis/apod/apod.component';

export const routes: Routes = [
    {path:'',component: HomePageComponent },
    {path:'apod',component: ApodComponent}

];
