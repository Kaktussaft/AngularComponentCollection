import { Component } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { AboutUsComponent } from '../../pages/aboutUs/aboutUs.component';
import { ContactComponent } from '../../pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];


@Component({
  selector: 'app-routing',
  imports: [],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent {

}
