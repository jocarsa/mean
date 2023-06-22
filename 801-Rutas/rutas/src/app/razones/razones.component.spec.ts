import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazonesComponent } from './razones.component';

describe('RazonesComponent', () => {
  let component: RazonesComponent;
  let fixture: ComponentFixture<RazonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RazonesComponent]
    });
    fixture = TestBed.createComponent(RazonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
