import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

import { CoinInfo } from '../table/table.component';


@Injectable(
// providedIn: 'root'
)
export class CoininfoService {

  constructor(private http: Http) { }

 ngOnInit(){}
  
 getcoin(url:string){
   return this.http.get(url);
 }
 


}




