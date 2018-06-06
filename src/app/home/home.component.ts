import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  options: Object;

    constructor() {
        this.options = {
            title: { text: 'Java Script Frameworks' },
            colors: [ '#8FB95B', '#5AB782', '#47C3B9', '#599EB5', '#436899', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1', '#BE78CB'],
            chart: {
                type: 'pie',
                animation: true
            },

            plotOptions: {
                pie: {
                    innerSize: '40%',
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    states: {
                        hover: {
                            halo: {
                                size: 0
                            }
                        }
                    }
                },
                series: {
                    animation: true,
                    point: {
                        events: {
                            legendItemClick: function (e) {
                                console.log(this);
                                return false;
                            }
                        }
                    }
                }
            },
            tooltip: {
                enabled: false
            },

            legend: {
                useHTML: true,
                enabled: true,
                align: 'right',
                verticalAlign: 'bottom',
                layout: 'vertical',
                x: 0,
                y: 30,
                symbolHeight: 12,
                itemMarginBottom: 10,
                symbolWidth: 25,
                symbolRadius: 1,
                labelFormatter: function () {
                    return '<div style="width:180px"><span class="pull-left" style= "font-weight: 500; padding-bottom: 5px">' + this.name +
                        '</span><span class="pull-right" style= "font-weight: 500" >' + ' - ' + this.value +
                        '</span></div> ';
                },
                title: {
                    text: ' Issues<br/><span style="font-size: 9px; color: #666; font-weight: normal">Total: 2000</span>'
                    // Click event on 2000
                    // call donut service's get total info. Need not have to pass any variable.

                },


            },

            series: [{
                data: [
                    { name: 'VueJS', value: '5,044', y: 5044 },
                    { name: 'AngularJS', value: '5,355', y: 5355 },
                    { name: 'ReactJS', value: '5,672', y: 56721 },
                    { name: 'Angular', value: '9,874', y: 98743 },
                    { name: 'EmberJS', value: '5,044', y: 5044 },
                ],
                allowPointSelect: true
            }]
        };
    }


  ngOnInit() {
  }

}
