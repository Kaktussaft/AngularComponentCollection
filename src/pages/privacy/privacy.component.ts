import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-privacy',
  imports: [FooterComponent, NavigationComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {

}
