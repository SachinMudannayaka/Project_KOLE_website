import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageFeaturesComponent } from './main-page-features.component';

describe('MainPageFeaturesComponent', () => {
  let component: MainPageFeaturesComponent;
  let fixture: ComponentFixture<MainPageFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
