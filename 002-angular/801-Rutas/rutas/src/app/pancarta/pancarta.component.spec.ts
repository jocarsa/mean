import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PancartaComponent } from './pancarta.component';

describe('PancartaComponent', () => {
  let component: PancartaComponent;
  let fixture: ComponentFixture<PancartaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PancartaComponent]
    });
    fixture = TestBed.createComponent(PancartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
