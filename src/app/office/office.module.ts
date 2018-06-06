import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { OfficeRoutingModule } from './office-routing.module';

import { OfficeComponent } from './office.component';
import { OfficeViewComponent } from './office-view/office-view.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

import { EmployeeLoginComponent } from './employee-login/employee-login.component';

@NgModule({
  declarations: [
    OfficeComponent,
    OfficeViewComponent,
    CreateEmployeeComponent,
    EmployeeProfileComponent,
    EmployeeLoginComponent
  ],
  imports: [
    OfficeRoutingModule,
    CommonModule,
    FormsModule,
    ToastyModule.forRoot()
  ],
  providers: [],
  bootstrap: [ OfficeComponent ]
})
export class OfficeModule { }

