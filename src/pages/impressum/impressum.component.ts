import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-impressum',
  imports: [FooterComponent, NavigationComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.css'
})
export class ImpressumComponent {

}
