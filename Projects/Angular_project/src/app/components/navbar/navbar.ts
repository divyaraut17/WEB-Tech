import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BillingService } from '../../services/billing';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  cartCount = 0;

  constructor(private billingService: BillingService) {
    this.billingService.getCartItems().subscribe(() => {
      this.cartCount = this.billingService.getCartCount();
    });
  }
}
