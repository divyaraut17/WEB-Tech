import { Injectable } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem {
  iceCream: IceCream;
  quantity: number;
}

export interface Order {
  id: number;
  date: Date;
  items: CartItem[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private cartItems: CartItem[] = [];
  private orders: Order[] = [];
  
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  private ordersSubject = new BehaviorSubject<Order[]>([]);

  constructor() { }

  getCartItems(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  getOrders(): Observable<Order[]> {
    return this.ordersSubject.asObservable();
  }

  addToCart(iceCream: IceCream): void {
    const existingItem = this.cartItems.find(item => item.iceCream.id === iceCream.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ iceCream, quantity: 1 });
    }
    this.cartSubject.next([...this.cartItems]);
  }

  removeFromCart(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.iceCream.id !== id);
    this.cartSubject.next([...this.cartItems]);
  }

  updateQuantity(id: number, quantity: number): void {
    const item = this.cartItems.find(item => item.iceCream.id === id);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeFromCart(id);
      } else {
        this.cartSubject.next([...this.cartItems]);
      }
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.iceCream.price * item.quantity), 0);
  }

  getCartCount(): number {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  checkout(): void {
    if (this.cartItems.length === 0) return;

    const newOrder: Order = {
      id: this.orders.length + 1,
      date: new Date(),
      items: [...this.cartItems],
      total: this.getTotal() * 1.05 // Including 5% GST
    };

    this.orders.push(newOrder);
    this.ordersSubject.next([...this.orders]);
    this.clearCart();
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next([]);
  }
}
