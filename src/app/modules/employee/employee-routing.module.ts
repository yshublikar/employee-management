import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent
  },
  {
    path: 'add',
    component: AddEditEmployeeComponent
  },
  {
    path: ':id/edit',
    component: AddEditEmployeeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
