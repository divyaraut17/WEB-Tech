import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart';

@Component({
selector:'app-checkout',
standalone:true,
imports:[FormsModule],
templateUrl:'./checkout.html',
styleUrls:['./checkout.css']
})
export class CheckoutComponent {

constructor(private cartService: CartService){}

placeOrder(){
alert("Order placed successfully");
this.cartService.clearCart();
}

}