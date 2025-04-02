import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutUsComponent } from '../pages/aboutUs/aboutUs.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { ImpressumComponent } from '../pages/impressum/impressum.component';
import { PrivacyComponent } from '../pages/privacy/privacy.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'impressum', component: ImpressumComponent},
    { path: 'privacy', component: PrivacyComponent},
    { path: '**', redirectTo: '' },
];
