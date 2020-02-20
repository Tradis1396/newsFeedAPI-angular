import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTechcrunchComponent } from './nav-techcrunch.component';

describe('NavTechcrunchComponent', () => {
  let component: NavTechcrunchComponent;
  let fixture: ComponentFixture<NavTechcrunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTechcrunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTechcrunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
