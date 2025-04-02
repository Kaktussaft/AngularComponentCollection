import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-home',
  imports: [NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
