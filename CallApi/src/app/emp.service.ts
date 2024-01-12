import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }

  getAllEmployee(){

    return this.http.get<any>("http://localhost:8100/getAllEmployee")
  }

  AddEmp(Value:any) { 
    return this.http.post<any>("http://localhost:8100/AddEmployee", {
      "empname": Value.empname,
      "empsalary": Value.empsalary,
      "empaddress": Value.empaddress,
      "gender": Value.gender,
      "phone": Value.phone,
      "email": Value.email,
      "department": Value.department
    })
  }
}
