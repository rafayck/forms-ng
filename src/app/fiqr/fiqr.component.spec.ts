import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiqrComponent } from './fiqr.component';

describe('FiqrComponent', () => {
  let component: FiqrComponent;
  let fixture: ComponentFixture<FiqrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiqrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
