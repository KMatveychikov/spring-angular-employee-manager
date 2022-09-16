import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee()
  constructor(
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      this.goToEmployeeList()
    },
      error => console.log(error))
  }
  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }
  onSubmit() {
    this.saveEmployee()
  }
}
