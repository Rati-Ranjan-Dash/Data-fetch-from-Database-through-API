import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  providers:[EmpService]
})
export class EmployeeComponent {
  EmployeeForm:FormGroup;
  EmpService: any;

  constructor(private empservice:EmpService){
    this.EmployeeForm = new FormGroup({
      
      empname:new FormControl('',[Validators.required]),
      empsalary: new FormControl(''),
      empaddress:new FormControl(''),
      gender:new FormControl(''),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      department:new FormControl(''),
   })
}
   AddEmployee()
   {
    console.log(this.EmployeeForm.value);
    // console.log(this.EmployeeForm.valid);
    this.empservice.AddEmp(this.EmployeeForm.value).subscribe((res:any)=>{

   })
   }
}
