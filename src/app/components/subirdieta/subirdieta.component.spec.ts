import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirdietaComponent } from './subirdieta.component';

describe('SubirdietaComponent', () => {
  let component: SubirdietaComponent;
  let fixture: ComponentFixture<SubirdietaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirdietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirdietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
