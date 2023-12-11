import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSkillsComponent } from './main-page-skills.component';

describe('MainPageSkillsComponent', () => {
  let component: MainPageSkillsComponent;
  let fixture: ComponentFixture<MainPageSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
