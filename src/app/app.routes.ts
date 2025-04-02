import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutUsComponent } from '../pages/aboutUs/aboutUs.component';
import { ContactComponent } from '../pages/contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' },
];
