import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { listenerCount } from 'process';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product/product-list.component';
import { FilterComponent } from './filter/filter.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { FilterRowComponent } from './components/filterrow/filterrow.component';
import { StarComponent } from './components/star/star.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    FilterComponent,
    ConvertToSpacesPipe,
    FilterRowComponent,
    StarComponent,
    NavMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
