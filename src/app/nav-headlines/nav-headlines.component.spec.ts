import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeadlinesComponent } from './nav-headlines.component';

describe('NavHeadlinesComponent', () => {
  let component: NavHeadlinesComponent;
  let fixture: ComponentFixture<NavHeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
