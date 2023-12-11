import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageContextComponent } from './main-page-context.component';

describe('MainPageContextComponent', () => {
  let component: MainPageContextComponent;
  let fixture: ComponentFixture<MainPageContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
