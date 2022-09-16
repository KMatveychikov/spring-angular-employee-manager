import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {EmployeeCreateComponent} from "./components/employee-create/employee-create.component";
import {EmployeeUpdateComponent} from "./components/employee-update/employee-update.component";
import {EmployeeDetailsComponent} from "./components/employee-details/employee-details.component";

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: EmployeeCreateComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: EmployeeUpdateComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
