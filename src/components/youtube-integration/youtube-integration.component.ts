import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-youtube-integration',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './youtube-integration.component.html',
  styleUrl: './youtube-integration.component.css',
})
export class YoutubeIntegrationComponent {}
