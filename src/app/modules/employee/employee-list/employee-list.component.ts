import { Component, OnInit } from '@angular/core';
import { Employees } from "../interfaces/employee-interface";
import { CommunicationService } from '../services/communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employees[];
  searchColumn = ['name', 'address.city']; //Column name to apply filter
  searchText: string = '';
  communicationServiceListener;

  constructor(private communicationService: CommunicationService,
    private router: Router) { 
    this.communicationServiceListener = this.communicationService.getEmployees.subscribe((employees: Employees[]) =>{
      this.employees = employees;
    })
  }

  ngOnInit() {
  }

  onSelectEdit(employee){
    this.router.navigate([`employees/${employee.id}/edit`]);
  }

  onAddNew(){
    this.router.navigateByUrl('employees/add');
  }

  ngOnDestroy(): void {
    this.communicationServiceListener.unsubscribe();
  }

}

