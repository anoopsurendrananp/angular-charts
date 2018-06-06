import { NgModule } from '@angular/core';
import { LoadChildren, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
                          {
                              path: '',
                              component: HomeComponent
                          },
                          {
                              path: 'pie',
                              component: PieChartComponent
                          },
                          {
                              path: 'bar',
                              component: BarChartComponent
                          },
                          {
                              path: 'office',
                              loadChildren: './office/office.module#OfficeModule'
                          }

                        ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

