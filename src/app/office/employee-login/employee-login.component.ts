import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  authData: any = {};
  msgData: string;
  toastOptions: ToastOptions = {
            title: 'My title',
            msg: this.msgData,
            showClose: true,
            timeout: 5000,
            theme: 'default'
  };
  constructor(private appService: AppService, private toastyService: ToastyService, private toastyConfig: ToastyConfig) { 
    this.toastyConfig.theme = 'bootstrap';
  }

  ngOnInit() {
  }

  onLogin() {
    this.appService.login(this.authData).subscribe(res => {
      const response = res.json();
      console.log(response);
      if (response.status) {
        this.msgData = response.info;
        this.toastOptions = {
          title: 'Success',
          msg: this.msgData,
          showClose: true,
          timeout: 5000,
          theme: 'bootstrap'
        };
        this.toastyService.success(this.toastOptions);
      } else {
        this.msgData = response.info;
        this.toastOptions = {
          title: 'Error',
          msg: this.msgData,
          showClose: true,
          timeout: 5000,
          theme: 'bootstrap'
        };
        this.toastyService.error(this.toastOptions);
      }
    });
  }

}
