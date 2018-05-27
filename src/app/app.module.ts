import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { UserDataComponent } from './user-data/user-data.component'
import { GraphComponent } from './graph/graph.component'


import {MatTableModule } from '@angular/material/table';


import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import {pageNotFoundComponent} from '../app/pageNotFound.component';

import {RouterModule,Routes} from '@angular/router';

const appRoutes:Routes =[
  {  path:'table',component:TableComponent },
  {  path:'profile',component:UserDataComponent  },
  {  path:'graph',component:GraphComponent  },
  {  path:'',redirectTo:'/table',pathMatch:'full' },
  {  path:'**', component:pageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserDataComponent,
    NavComponent,
    SidemenuComponent,
    GraphComponent,
    pageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
