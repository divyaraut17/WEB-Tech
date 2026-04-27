import { BillingService, CartItem } from '../../services/billing';
import { IceCreamService } from '../../services/ice-cream';
import { IceCream } from '../../models/ice-cream.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './billing.html',
  styleUrl: './billing.css'
})
export class BillingComponent implements OnInit {
  cartItems: CartItem[] = [];
  inventory: IceCream[] = [];
  total: number = 0;

  constructor(
    private billingService: BillingService,
    private iceCreamService: IceCreamService
  ) { }

  ngOnInit(): void {
    this.billingService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.total = this.billingService.getTotal();
    });

    this.iceCreamService.getIceCreams().subscribe(items => {
      this.inventory = items;
    });
  }

  increaseQty(id: number): void {
    const item = this.cartItems.find(i => i.iceCream.id === id);
    if (item) {
      this.billingService.updateQuantity(id, item.quantity + 1);
    }
  }

  decreaseQty(id: number): void {
    const item = this.cartItems.find(i => i.iceCream.id === id);
    if (item) {
      this.billingService.updateQuantity(id, item.quantity - 1);
    }
  }

  removeItem(id: number): void {
    this.billingService.removeFromCart(id);
  }

  addToBill(ic: IceCream): void {
    this.billingService.addToCart(ic);
  }

  checkout(): void {
    if (this.cartItems.length > 0) {
      this.billingService.checkout();
      alert('Order placed successfully! Receipt printed.');
    }
  }

  clearAll(): void {
    if (confirm('Are you sure you want to clear the bill?')) {
      this.billingService.clearCart();
    }
  }
}
