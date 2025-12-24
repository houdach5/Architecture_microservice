import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-orders',
  imports: [
    DatePipe,
    CommonModule
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class OrdersComponent implements OnInit {

  orders: any;
  customerId!: number;
  constructor(private http: HttpClient, private router: Router, private route : ActivatedRoute) {
  this.customerId=route.snapshot.params['customerId'];
  }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/order-service/orders/search/byCustomerId?projection=fullOrder&customerId='+this.customerId)
      .subscribe({
        next: (data) => {
          this.orders = data;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  getOrderDetails(o: any) {
  this.router.navigateByUrl("/order-details/"+o.id);
  }
}
