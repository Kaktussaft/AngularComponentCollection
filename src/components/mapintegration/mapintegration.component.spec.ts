import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapintegrationComponent } from './mapintegration.component';

describe('MapintegrationComponent', () => {
  let component: MapintegrationComponent;
  let fixture: ComponentFixture<MapintegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapintegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
