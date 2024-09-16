import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ApodComponent } from './components/nasa-apis/apod/apod.component';
import { EpicComponent } from './components/nasa-apis/epic/epic.component';

export const routes: Routes = [
    {path:'',component: HomePageComponent },
    {path:'apod',component: ApodComponent},
    {path:'epic',component:EpicComponent}

];
