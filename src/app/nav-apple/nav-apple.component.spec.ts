import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAppleComponent } from './nav-apple.component';

describe('NavAppleComponent', () => {
  let component: NavAppleComponent;
  let fixture: ComponentFixture<NavAppleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavAppleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
