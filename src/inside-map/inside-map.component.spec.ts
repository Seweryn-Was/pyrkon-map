import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideMapComponent } from './inside-map.component';

describe('InsideMapComponent', () => {
  let component: InsideMapComponent;
  let fixture: ComponentFixture<InsideMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsideMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsideMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
