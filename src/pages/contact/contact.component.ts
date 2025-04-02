import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
