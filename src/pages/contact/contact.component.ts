import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, NavigationComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
