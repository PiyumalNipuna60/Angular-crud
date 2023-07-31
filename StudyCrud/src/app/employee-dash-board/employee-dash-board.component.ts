import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from './employee-dash-board-model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee-dash-board',
  templateUrl: './employee-dash-board.component.html',
  styleUrls: ['./employee-dash-board.component.css']
})
export class EmployeeDashBoardComponent {

  formValue !: FormGroup;
  employeeModelobj: EmployeeModel = new EmployeeModel();
  employeeData!: any;

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    })

    this.getAllEmployee();
  }

  saveEmployeeDetails() {
    this.employeeModelobj.firstName = this.formValue.value.firstName;
    this.employeeModelobj.lastName = this.formValue.value.lastName;
    this.employeeModelobj.email = this.formValue.value.email;
    this.employeeModelobj.mobile = this.formValue.value.mobile;
    this.employeeModelobj.salary = this.formValue.value.salary;

    this.api.saveEmployee(this.employeeModelobj)
      .subscribe(res => {
        console.log(res);
        alert("Employee Added Successfully");
        this.getAllEmployee();
        let ref = document.getElementById('cansel')
        ref?.click();
        this.formValue.reset();
      },
        err => {
          alert("Something Went Wrong");
        }
      )
  }

  getAllEmployee() {
    this.api.getAllEmployee()
      .subscribe(res => {
        this.employeeData = res;
      })
  }

  deleteEmployee(row: any) {
    this.api.deleteEmployee(row.id)
      .subscribe(res => {
        alert("Employee has Deleted..!");
        this.getAllEmployee();
      })

  }
}
