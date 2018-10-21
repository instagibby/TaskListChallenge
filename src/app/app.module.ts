import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";




@NgModule({
  imports:[ 
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [ 
    HomeComponent,
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [ HomeComponent ]
})
/**
 * Main module for our application, if creating any new components, be sure to declare them above.
 * If creating any new services, provide them above
 */
export class AppModule { }