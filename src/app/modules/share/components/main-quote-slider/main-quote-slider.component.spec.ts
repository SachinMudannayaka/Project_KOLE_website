import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainQuoteSliderComponent } from './main-quote-slider.component';

describe('MainQuoteSliderComponent', () => {
  let component: MainQuoteSliderComponent;
  let fixture: ComponentFixture<MainQuoteSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainQuoteSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainQuoteSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
