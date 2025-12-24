import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products';
import { CustomersComponent } from './customers/customers';
export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  }
];
