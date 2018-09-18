import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgedComponent } from './ledged.component';

describe('LedgedComponent', () => {
  let component: LedgedComponent;
  let fixture: ComponentFixture<LedgedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
