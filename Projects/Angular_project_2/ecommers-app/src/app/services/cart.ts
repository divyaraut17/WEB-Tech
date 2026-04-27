import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  clearCart(){
this.items=[];
}
  private items: any[] = [];

  getItems() {
    return this.items;
  }

  addItem(item: any) {
    this.items.push(item);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price || 0), 0);
  }
  getCount() {
  return this.items.length;
}
}

