import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBitcoinComponent } from './nav-bitcoin.component';

describe('NavBitcoinComponent', () => {
  let component: NavBitcoinComponent;
  let fixture: ComponentFixture<NavBitcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBitcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
