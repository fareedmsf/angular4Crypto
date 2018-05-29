import { Component, OnInit } from '@angular/core';
// import {single, multi} from './../../assets/data';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  constructor() {
    
  var single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },{
      "name": "Germany1",
      "value": 8940000
    },
    {
      "name": "USA1",
      "value": 5000000
    },
    {
      "name": "France1",
      "value": 7200000
    },{
      "name": "Germany11",
      "value": 8940000
    },
    {
      "name": "USA11",
      "value": 5000000
    },
    {
      "name": "France11",
      "value": 7200000
    }
  ];
    Object.assign(this,{single})
   }

  ngOnInit() {
     
  }
  onSelect(event) {
    console.log(event);
  }

}


