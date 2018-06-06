import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartLabels: string[] = [ 'Angular', 'ReactJS', 'NodeJS', 'VueJS', 'AngularJS' ];
  public pieChartData: number[] = [ 600, 300, 250, 200, 100];
  public pieChartType: string = 'pie';
  public pieChartOptions: any = {
    // scaleShowVerticalLines: false,
    // responsive: true,
    legend: {position: 'right'}
  };

  public chartColors: any[] = [
    {
      backgroundColor: ['#8FB95B', '#5AB782', '#47C3B9', '#599EB5', '#436899', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1', '#BE78CB']
    }];

  constructor(public location: Location) { }

  ngOnInit() {
  }
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize() {
    this.pieChartData = [ Math.round(Math.random() * 1000),  Math.round(Math.random() * 1000),
                          Math.round(Math.random() * 1000),  Math.round(Math.random() * 1000),
                          Math.round(Math.random() * 1000)];
    console.log(this.pieChartData);
  }
}
