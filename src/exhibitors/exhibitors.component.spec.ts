import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorsComponent } from './exhibitors.component';

describe('ExhibitorsComponent', () => {
  let component: ExhibitorsComponent;
  let fixture: ComponentFixture<ExhibitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExhibitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
