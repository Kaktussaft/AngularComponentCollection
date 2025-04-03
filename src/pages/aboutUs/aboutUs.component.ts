import { Component } from '@angular/core';
import { AboutCardComponent } from '../../components/about-card/about-card.component';
import {CaruselComponent } from '../../components/carusel/carusel.component';

@Component({
  selector: 'app-aboutUs',
  standalone: true,
  imports: [AboutCardComponent, CaruselComponent],
  templateUrl: './aboutUs.component.html',
  styleUrl: './aboutUs.component.css',
})
export class AboutUsComponent {}
