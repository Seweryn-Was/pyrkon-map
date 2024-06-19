import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hall5Component } from './hall5.component';

describe('Hall5Component', () => {
  let component: Hall5Component;
  let fixture: ComponentFixture<Hall5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hall5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hall5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
