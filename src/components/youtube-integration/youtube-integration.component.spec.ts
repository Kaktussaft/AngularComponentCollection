import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeIntegrationComponent } from './youtube-integration.component';

describe('YoutubeIntegrationComponent', () => {
  let component: YoutubeIntegrationComponent;
  let fixture: ComponentFixture<YoutubeIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
