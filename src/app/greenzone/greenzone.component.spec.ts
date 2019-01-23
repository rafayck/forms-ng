import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenzoneComponent } from './greenzone.component';

describe('GreenzoneComponent', () => {
  let component: GreenzoneComponent;
  let fixture: ComponentFixture<GreenzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
