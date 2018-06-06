import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficeComponent } from './office.component';
import { OfficeViewComponent } from './office-view/office-view.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';

const routes: Routes = [    {
                                path: '',
                                component: OfficeComponent,
                                children:   [
                                    {
                                        path: 'view',
                                        component: OfficeViewComponent
                                    },
                                    {
                                        path: 'employee/create',
                                        component: CreateEmployeeComponent
                                    },
                                    {
                                        path: 'employee/login',
                                        component: EmployeeLoginComponent
                                    },
                                    {
                                        path: 'employee/profile',
                                        component: EmployeeProfileComponent
                                    }
                                ]
                            }
                       ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class OfficeRoutingModule {}
