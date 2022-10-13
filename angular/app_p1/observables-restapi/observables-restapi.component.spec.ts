import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesRestapiComponent } from './observables-restapi.component';

describe('ObservablesRestapiComponent', () => {
  let component: ObservablesRestapiComponent;
  let fixture: ComponentFixture<ObservablesRestapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesRestapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesRestapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
