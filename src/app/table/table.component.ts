import { CoininfoService } from './../service/coininfo.service';
import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material';

import {Http, Response} from '@angular/http/';

// import { Component, Input,OnInit } from '@angular/core';
// import { Injectable }     from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [CoininfoService]
})
export class TableComponent implements OnInit {

 coindata:CoinInfo[];
  x: [string, number];
   ELEMENT_DATA:any;
   displayedColumns:any;
   dataSource:any;
   data_length:number;
   index =new Array();


  
 
  constructor(private coininfo:CoininfoService) { 
    
   }
  
  

  ngOnInit(){
   let  URL :string = "https://api.coingecko.com/api/v3/coins";
   this.coininfo.getcoin(URL).subscribe(data=>{
    this.x = data.json();

    for (let i=0;i<this.x.length;i++){
           this.x[i]['ind'] = i+1;
    }
    this.table_function();
   });
   
 } 

 table_function(){
  

   console.log("table function");
   console.log(this.x);
  this.ELEMENT_DATA = this.x ;
  this.displayedColumns = ['No','image' ,'symbol', 'name','current_price','high','low','marketcap','price_change_24hr'];
  this.dataSource =this.ELEMENT_DATA; 
}

}

export interface CoinInfo {
  name: string;
  image: string;
  current_price:number,
  last_updated : string,
}
