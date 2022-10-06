import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOperationsUserComponent } from './crud-operations-user.component';

describe('CrudOperationsUserComponent', () => {
  let component: CrudOperationsUserComponent;
  let fixture: ComponentFixture<CrudOperationsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudOperationsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudOperationsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
