import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  id: any
  employee = new Employee()

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe(data => this.employee = data)
  }

}
