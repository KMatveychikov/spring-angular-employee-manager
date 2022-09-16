import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-update-employee',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {
  id: any
  employee: any = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.employee = this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data
    })
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToEmployeeList()
    })
  }
  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }
}
