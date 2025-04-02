import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-aboutUs',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './aboutUs.component.html',
  styleUrl: './aboutUs.component.css',
})
export class AboutUsComponent {}
