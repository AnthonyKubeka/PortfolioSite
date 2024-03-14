import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSectionCardComponent } from './cv-section-card.component';

describe('CvSectionCardComponent', () => {
  let component: CvSectionCardComponent;
  let fixture: ComponentFixture<CvSectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvSectionCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CvSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
