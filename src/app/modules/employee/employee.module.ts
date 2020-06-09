import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../utils/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { CommunicationService } from './services/communication.service';

@NgModule({
  declarations: [EmployeeListComponent, AddEditEmployeeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    EmployeeRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [
    CommunicationService
  ]
})
export class EmployeeModule { }
