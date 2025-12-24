import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products';
import { CustomersComponent } from './customers/customers';
import { OrdersComponent } from './orders/orders';
import { OrderDetailsComponent } from './order-details/order-details';
export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'orders/:customerId',
    component: OrdersComponent
  },
  {
    path: 'order-details/:orderId',
    component: OrderDetailsComponent
  }
];
