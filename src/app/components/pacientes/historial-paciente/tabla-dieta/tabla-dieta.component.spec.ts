import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDietaComponent } from './tabla-dieta.component';

describe('TablaDietaComponent', () => {
  let component: TablaDietaComponent;
  let fixture: ComponentFixture<TablaDietaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
