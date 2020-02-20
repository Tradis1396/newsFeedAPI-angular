import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLContentComponent } from './html-content.component';

describe('HTMLContentComponent', () => {
  let component: HTMLContentComponent;
  let fixture: ComponentFixture<HTMLContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTMLContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
