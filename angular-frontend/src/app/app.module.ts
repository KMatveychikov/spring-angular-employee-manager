import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import {HttpClientModule} from "@angular/common/http";
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import {FormsModule} from "@angular/forms";
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    EmployeeDetailsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
