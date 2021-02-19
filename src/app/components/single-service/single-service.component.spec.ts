import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleServiceComponent } from './single-service.component';

describe('SingleServiceComponent', () => {
  let component: SingleServiceComponent;
  let fixture: ComponentFixture<SingleServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
