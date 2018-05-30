import { Component, OnInit } from '@angular/core';
// import {single, multi} from './../../assets/data';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { CoininfoService } from '../service/coininfo.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [1150,1000];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Price';
  showYAxisLabel = true;
  yAxisLabel = 'Coin Names';

  colorScheme = {
    domain: ['#f48fb1', '#ccff90', '#f4ff81', '#AAAAAA','#b2dfdb','#2962ff','#6200ea','#651fff','#c6ff00','#00e676','#64dd17']
  };


  constructor(private coin:CoininfoService) {
  }
  

  ngOnInit() {
     this.single = this.coin.getData();
     console.log(this.single)
  }
  onSelect(event) {
    console.log(event);
  }

}


