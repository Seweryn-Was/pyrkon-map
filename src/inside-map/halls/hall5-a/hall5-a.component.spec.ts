import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hall5AComponent } from './hall5-a.component';

describe('Hall5AComponent', () => {
  let component: Hall5AComponent;
  let fixture: ComponentFixture<Hall5AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hall5AComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hall5AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
