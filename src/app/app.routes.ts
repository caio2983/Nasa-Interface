import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ApodComponent } from './components/nasa-apis/apod/apod.component';
import { EpicComponent } from './components/nasa-apis/epic/epic.component';
import { ImageLibraryComponent } from './components/nasa-apis/image-library/image-library.component';
import { MarsRoverComponent } from './components/nasa-apis/mars-rover/mars-rover.component';

export const routes: Routes = [
    {path:'',component: HomePageComponent },
    {path:'apod',component: ApodComponent},
    {path:'epic',component:EpicComponent},
    {path:'imagelib',component:ImageLibraryComponent},
    {path: 'marsrover',component:MarsRoverComponent}


];
