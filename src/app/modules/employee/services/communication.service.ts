import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employees } from '../interfaces/employee-interface';
import { employeeData } from '../../../utils/employee-data';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  employees: Employees[] = employeeData; //Storig the data into service

  constructor() { }

  private employeeData = new BehaviorSubject<Employees[]>(this.employees)
  public getEmployees = this.employeeData.asObservable();
  
  addEmployeeData(payload){
    payload.id = this.employees.length + 1;
    this.employees = [...this.employees, payload];
    this.employeeData.next(this.employees);
  }

  getEmployeeById(id){
    return this.employees.find((x: any) => x.id === id)
  }

  updateEmployee(payload){
    let index = this.employees.findIndex((x: any)=> x.id===payload.id);
    if(index !== -1){
      this.employees[index] = payload;
      this.employeeData.next(this.employees);
    }
  }
}
