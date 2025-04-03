import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapintegrationComponent } from "../../components/mapintegration/mapintegration.component";


@Component({
  selector: 'app-home',
  imports: [CommonModule, MapintegrationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
