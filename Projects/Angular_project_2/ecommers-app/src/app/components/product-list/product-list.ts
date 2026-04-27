import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  products = [
    {name:'Phone',price:10000},
    {name:'Laptop',price:50000},
    {name:'Headphones',price:2000},
    {name:'Printer',price:10000},
    {name:'Watch',price:10000},
    {name:'Tablet',price:25000},
    {name:'Camera',price:35000},
    {name:'Keyboard',price:3000}
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addItem(product);
  }
  searchText='';

get filteredProducts(){
 return this.products.filter(p =>
  p.name.toLowerCase().includes(
   this.searchText.toLowerCase()
 ));
}
}
