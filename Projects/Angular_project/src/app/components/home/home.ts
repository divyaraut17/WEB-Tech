import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IceCreamService } from '../../services/ice-cream';
import { BillingService, Order } from '../../services/billing';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  totalFlavors: number = 0;
  totalOrders: number = 0;
  orderHistory: Order[] = [];

  constructor(
    private iceCreamService: IceCreamService,
    private billingService: BillingService
  ) {}

  ngOnInit(): void {
    // Get total items
    this.iceCreamService.getIceCreams().subscribe(items => {
      this.totalFlavors = items.length;
    });

    // Get order history and stats
    this.billingService.getOrders().subscribe(orders => {
      this.orderHistory = orders.slice().reverse(); // Show latest first
      this.totalOrders = orders.length;
    });
  }
}
