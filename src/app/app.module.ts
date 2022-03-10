import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { listenerCount } from 'process';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product/product-list.component';
import { FilterComponent } from './filter/filter.component'; 
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import { FilterRowComponent } from './components/filterrow/filterrow.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    FilterComponent, 
    ConvertToSpacesPipe, 
    FilterRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
