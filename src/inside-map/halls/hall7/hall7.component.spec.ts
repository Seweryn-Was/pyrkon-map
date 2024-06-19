import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hall7Component } from './hall7.component';

describe('Hall7Component', () => {
  let component: Hall7Component;
  let fixture: ComponentFixture<Hall7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hall7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hall7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
