import { Component } from '@angular/core';
import { AboutCardComponent } from '../../components/about-card/about-card.component';
import {CaruselComponent } from '../../components/carusel/carusel.component';
import { FooterComponent } from '../../components/footer/footer.component';
import {NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-aboutUs',
  standalone: true,
  imports: [AboutCardComponent, CaruselComponent, FooterComponent, NavigationComponent],
  templateUrl: './aboutUs.component.html',
  styleUrl: './aboutUs.component.css',
})
export class AboutUsComponent {}
