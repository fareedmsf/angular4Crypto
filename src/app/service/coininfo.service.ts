import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

import { CoinInfo } from '../table/table.component';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable(
// providedIn: 'root'
)
export class CoininfoService {
  private data:any = undefined;

  constructor(private http: Http) { }

 ngOnInit(){}
  
 getcoin(url:string){
   return this.http.get(url);
 }
 

 setData(data:any){
  this.data = data;
}

getData():any{
  return this.data;
}


}




