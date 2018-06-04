import { CoininfoService } from './../service/coininfo.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material';

import { Http, Response } from '@angular/http/';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  coindata: CoinInfo[];
  x: [string, number];
  ELEMENT_DATA: any;
  displayedColumns: any;
  dataSource: any;
  data_length: number;

  graphdata: any = [];
  // gdata: any = [];



  constructor(private coininfo: CoininfoService) {

  }



  ngOnInit() {
    let URL: string = "https://api.coingecko.com/api/v3/coins";
    this.coininfo.getcoin(URL).subscribe(data => {
      this.x = data.json();


      for (let i = 0; i < this.x.length; i++) {
        this.x[i]['ind'] = i + 1;
        let dt = {};
        dt['name'] = this.x[i]['symbol'];
        dt['value'] = this.x[i]['market_data'].current_price.usd;
        this.graphdata.push(dt);
     }
      console.log(this.graphdata);
      this.coininfo.setData(this.graphdata);
      this.table_function();
    });

  }

  table_function() {
    this.ELEMENT_DATA = this.x;
    this.displayedColumns = ['No', 'image', 'symbol', 'name', 'current_price', 'high', 'low', 'marketcap', 'price_change_24hr'];
    this.dataSource = this.ELEMENT_DATA;
  }

  sendData(){
    
  }

}

export interface CoinInfo {
  name: string;
  image: string;
  current_price: number,
  last_updated: string,
  market_data: any;

}

// export class graph {

// private symbol1:string;
// private  price1: number

// constructor(){

// }

// }