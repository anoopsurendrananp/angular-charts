import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {position: 'bottom'}
  };
  public barChartLabels: string[] = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartColor: Array<Color> = [
    {
      backgroundColor: '#8FB95B',
      // hoverBackgroundColor: 'green'
    },
    { backgroundColor: '#5AB782' },
    { backgroundColor: '#47C3B9' },
    { backgroundColor: '#599EB5' },
    {
      backgroundColor: '#436899',
      // hoverBackgroundColor: '#006442'
    },
    { backgroundColor: '#e4d354' },
    { backgroundColor: '#2b908f' },
    { backgroundColor: '#f45b5b' },
    { backgroundColor: '#91e8e1' },
    { backgroundColor: '#BE78CB' }
  ];
  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Angular'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'ReactJS'},
    {data: [45, 20, 54, 91, 26, 55, 20], label: 'VueJS'},
    {data: [19, 28, 48, 40, 86, 27, 70], label: 'NodeJS'},
    {data: [59, 80, 65, 51, 16, 55, 49], label: 'AngularJS'}
  ];

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
    const info = [
      Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100),
      Math.round(Math.random() * 100), Math.round(Math.random() * 100),
      Math.round(Math.random() * 100), Math.round(Math.random() * 100)
    ];
    return info;
  }

  public setData() {
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = this.randomize();
    clone[1].data = this.randomize();
    clone[2].data = this.randomize();
    clone[3].data = this.randomize();
    clone[4].data = this.randomize();
    this.barChartData = clone;
  }
}
