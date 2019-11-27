import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTipComponent } from './agregar-tip.component';

describe('AgregarTipComponent', () => {
  let component: AgregarTipComponent;
  let fixture: ComponentFixture<AgregarTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
