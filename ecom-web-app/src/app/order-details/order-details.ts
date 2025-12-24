import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-details',
  imports: [CommonModule],
  templateUrl: './order-details.html',
  styleUrl: './order-details.css',
})
export class OrderDetailsComponent implements OnInit {

  orderDetails: any;
  orderId!: number;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.orderId = route.snapshot.params['orderId'];
  }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/order-service/fullOrder/' + this.orderId)
      .subscribe({
        next: (data) => {
          this.orderDetails = data;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  getOrderDetails(o: any) {
    this.router.navigateByUrl("/order-details/" + o.id);
  }
}
