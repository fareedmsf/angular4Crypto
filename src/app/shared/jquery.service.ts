import { Injectable } from '@angular/core';
declare var $ :any;
@Injectable()

export class jqueryclass{
    
    initialfuncion(){
        $(document).ready(function(){
            $('.sidenav').sidenav();
          });
    }

    
}