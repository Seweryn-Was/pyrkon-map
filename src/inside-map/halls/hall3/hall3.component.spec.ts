import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hall3Component } from './hall3.component';

describe('Hall3Component', () => {
  let component: Hall3Component;
  let fixture: ComponentFixture<Hall3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hall3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hall3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
