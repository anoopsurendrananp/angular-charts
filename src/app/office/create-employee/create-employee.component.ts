import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  empData: any = {};

  constructor(private appService: AppService, private toastyService: ToastyService, private toastyConfig: ToastyConfig) { 
    this.toastyConfig.theme = 'material';
  }

  ngOnInit() {
  }

  save() {
    this.appService.createEmployee(this.empData).subscribe(res => {
      console.log(res.json());
    });
  }

}
