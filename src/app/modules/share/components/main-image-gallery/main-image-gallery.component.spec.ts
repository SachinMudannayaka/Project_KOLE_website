import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImageGalleryComponent } from './main-image-gallery.component';

describe('MainImageGalleryComponent', () => {
  let component: MainImageGalleryComponent;
  let fixture: ComponentFixture<MainImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainImageGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
