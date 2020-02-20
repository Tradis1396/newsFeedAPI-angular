import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavWallstreetComponent } from './nav-wallstreet.component';

describe('NavWallstreetComponent', () => {
  let component: NavWallstreetComponent;
  let fixture: ComponentFixture<NavWallstreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavWallstreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavWallstreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
