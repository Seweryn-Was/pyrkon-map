import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorgramTableComponent } from './porgram-table.component';

describe('PorgramTableComponent', () => {
  let component: PorgramTableComponent;
  let fixture: ComponentFixture<PorgramTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorgramTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorgramTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
