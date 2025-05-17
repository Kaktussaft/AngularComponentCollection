import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { AboutUsComponent } from '../pages/aboutUs/aboutUs.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { ImpressumComponent } from '../pages/impressum/impressum.component';
import { PrivacyComponent } from '../pages/privacy/privacy.component';
import { AuthGuard } from '../auth.guard';



export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutUsComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  {
    path: 'impressum',
    component: ImpressumComponent,
    canActivate: [AuthGuard],
  },
  { path: 'privacy', component: PrivacyComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];
