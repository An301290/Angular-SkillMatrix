import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product/product-list.component';
import { FilterComponent } from './filter/filter.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductDetailGuard } from './product/product-detail.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent,
  },
  { path: 'filter', component: FilterComponent },
  { path: 'navbar', component: NavMenuComponent },
  { path: '**', redirectTo: 'Welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
