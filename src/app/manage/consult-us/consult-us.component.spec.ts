import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultUsComponent } from './consult-us.component';

describe('ConsultUsComponent', () => {
  let component: ConsultUsComponent;
  let fixture: ComponentFixture<ConsultUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
