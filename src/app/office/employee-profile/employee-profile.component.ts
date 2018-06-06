import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  data: any = [];
  constructor(private http: Http) { }

  ngOnInit() {
    this.getData();
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }
  getData() {
    this.http.get('http://localhost/PHP-API/')
        .subscribe(res => this.data = res.json());
  }

}
