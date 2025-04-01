import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from '../components/navigation/navigation.component'
import { HomeComponent } from '../pages/home/home.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { ContactComponent } from '../pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];

@Component({
  selector: 'app-root',
  imports: [RouterModule, Routes, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'angular-component-experimentation';
}
