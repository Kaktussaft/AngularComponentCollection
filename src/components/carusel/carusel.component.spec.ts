import { ComponentFixture, TestBed } from '@angular/core/testing';

import {CaruselComponent } from './carusel.component';

describe('caruselComponent', () => {
  let component:CaruselComponent;
  let fixture: ComponentFixture<caruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [caruselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(caruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
