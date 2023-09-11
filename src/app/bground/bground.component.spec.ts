import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgroundComponent } from './bground.component';

describe('BgroundComponent', () => {
  let component: BgroundComponent;
  let fixture: ComponentFixture<BgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BgroundComponent]
    });
    fixture = TestBed.createComponent(BgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
