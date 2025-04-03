import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  standalone: true,
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css'],
})
export class AboutCardComponent {
  @Input() imageSrc: string = '';
  @Input() alt: string = 'image';
  @Input() name: string = '';
  @Input() address: string = '';
  @Input() phone: string = '';
  @Input() email: string = '';
  @Input() experience: string = '';
  @Input() description: string = '';
}
