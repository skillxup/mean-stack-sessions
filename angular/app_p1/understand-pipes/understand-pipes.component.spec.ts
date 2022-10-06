import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandPipesComponent } from './understand-pipes.component';

describe('UnderstandPipesComponent', () => {
  let component: UnderstandPipesComponent;
  let fixture: ComponentFixture<UnderstandPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderstandPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderstandPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
