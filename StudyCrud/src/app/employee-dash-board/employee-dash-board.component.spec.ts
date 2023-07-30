import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDashBoardComponent } from './employee-dash-board.component';

describe('EmployeeDashBoardComponent', () => {
  let component: EmployeeDashBoardComponent;
  let fixture: ComponentFixture<EmployeeDashBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDashBoardComponent]
    });
    fixture = TestBed.createComponent(EmployeeDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
