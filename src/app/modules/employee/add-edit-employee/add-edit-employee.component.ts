import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { CommunicationService } from '../services/communication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent implements OnInit {
  employeeId: Number;
  employeeForm: FormGroup;
  primaryBtnText: string;

  constructor(private route: ActivatedRoute,
    private FB: FormBuilder,
    private location: Location,
    private communicationService: CommunicationService) { 
    this.employeeId = parseInt(this.route.snapshot.url[0].path);
    this.primaryBtnText = this.employeeId? 'Update' : 'Save';
  }

  ngOnInit() {
    this.generateEmployeeForm();
    if(this.employeeId){ //For edit functionality
      let employeeData = this.communicationService.getEmployeeById(this.employeeId);
      this.employeeForm.patchValue(employeeData);
    }
  }

  generateEmployeeForm(){
    this.employeeForm = this.FB.group({
      id: null,
      name: ['', [Validators.required, Validators.minLength(4)]],
      phone: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      address: this.FB.group({
          city: '',
          address_line1: '',
          address_line2: '',
          postal_code: null
      })
    })
  }

  onFormSubmit(){
    if(this.employeeForm.valid){
      if(this.employeeId)
        this.communicationService.updateEmployee(this.employeeForm.value);
      else
        this.communicationService.addEmployeeData(this.employeeForm.value);
      this.onBack();
    }
  }

  onBack(){
    this.location.back(); //I am redirecting user to back screen
  }

}
