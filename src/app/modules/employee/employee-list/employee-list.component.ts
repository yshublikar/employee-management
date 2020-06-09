import { Component, OnInit } from '@angular/core';
import { employeeData } from '../../../utils/employee-data';
import { Employees } from "../interfaces/employee-interface";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employees[] = employeeData;

  constructor() { }

  ngOnInit() {
  }

  onSelectEdit(employee){
    console.log(employee)
  }

}

