import { Component, OnInit } from '@angular/core';
import { jqueryclass } from '../shared/jquery.service'

 declare var $ :any;

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
  providers:[jqueryclass]
})
export class SidemenuComponent implements OnInit {

  constructor( private jquery:jqueryclass) { }

  ngOnInit() {

    $('button').click(function(){
      alert("hi");
    }); 
    this.jquery.initialfuncion();

       
  }

}
