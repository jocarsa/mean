import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviacontactoComponent } from './enviacontacto.component';

describe('EnviacontactoComponent', () => {
  let component: EnviacontactoComponent;
  let fixture: ComponentFixture<EnviacontactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnviacontactoComponent]
    });
    fixture = TestBed.createComponent(EnviacontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
