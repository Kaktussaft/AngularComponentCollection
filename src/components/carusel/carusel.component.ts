import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css'],
})
export class CaruselComponent {
  images: string[] = [
    '/images/forest.jpeg',
    '/images/forest1.jpeg',
    '/images/forest2.jpeg',
  ];
  currentSlide: number = 0;

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
  }
}
