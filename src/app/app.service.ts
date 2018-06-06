import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from './../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  postUrl: string;
  constructor(public http: Http) { }

  getLegendInfo(id: any) {
    console.log(id);
  }

  getTotalInfo(id: any) {
    console.log(id);
  }

  createEmployee(query) {
    this.postUrl = '/employees';
    return this.http.post( environment.baseUrl + this.postUrl, query)
                .map(res => res);

  }

  login(query) {
    this.postUrl = '/login';
    return this.http.post( environment.baseUrl + this.postUrl, query)
                .map(res => res);
  }

}

