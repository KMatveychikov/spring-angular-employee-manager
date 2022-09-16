import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../../services/employee.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined

  constructor(
    private employeeService: EmployeeService,
    private router: Router
    ) { }

  ngOnInit(): void {
  this.getEmployees()
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data
    })
  }

  updateEmployee(id: any) {
    this.router.navigate(['update-employee', id])
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
        this.getEmployees()
      })
  }

  employeeDetails(id: any) {
    this.router.navigate(['employee-details', id])
  }
}
