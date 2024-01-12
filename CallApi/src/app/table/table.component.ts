import { Component } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  result:any=[];
  constructor(private empservice:EmpService) {
    
    this.empservice.getAllEmployee().subscribe((res:any)=>{
      console.log(res);
      this.result =res;
    })

  }
}
