import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  Email:string;
  Password:string;
  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log("in");
    let credential={}
    credential['email']= this.Email;
    credential['password'] =this.Password;
    console.log(credential);
    return 
  }

}
