import { Component } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-mapintegration',
  standalone: true,
  imports: [GoogleMap, MapMarker],
  templateUrl: './mapintegration.component.html',
  styleUrls: ['./mapintegration.component.css'],
})
export class MapintegrationComponent {
  center: google.maps.LatLngLiteral = { lat: 47, lng: 9.9 };
  zoom = 4;
  display: google.maps.LatLngLiteral | null = null;

  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }

  moveMap(event: google.maps.MapMouseEvent): void {
    if (event.latLng) {
      this.center = event.latLng.toJSON();
    }
  }

  move(event: google.maps.MapMouseEvent): void {
    if (event.latLng) {
      this.display = event.latLng.toJSON();
    }
  }
}
