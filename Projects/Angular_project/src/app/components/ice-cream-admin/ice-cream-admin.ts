import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IceCreamService } from '../../services/ice-cream';
import { IceCream } from '../../models/ice-cream.model';

@Component({
  selector: 'app-ice-cream-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ice-cream-admin.html',
  styleUrl: './ice-cream-admin.css'
})
export class IceCreamAdminComponent implements OnInit {
  iceCreams: IceCream[] = [];
  editingIceCream: IceCream | null = null;
  
  newIceCream: IceCream = this.getEmptyIceCream();

  constructor(private iceCreamService: IceCreamService) {}

  ngOnInit(): void {
    this.iceCreamService.getIceCreams().subscribe(data => {
      this.iceCreams = data;
    });
  }

  getEmptyIceCream(): IceCream {
    return {
      id: 0,
      name: '',
      flavor: 'Vanilla',
      price: 150,
      description: '',
      imageUrl: 'https://images.unsplash.com/photo-1579954115545-a95591f28be0?auto=format&fit=crop&q=80&w=400',
      rating: 5.0,
      isAvailable: true
    };
  }

  onSubmit(): void {
    if (this.editingIceCream) {
      this.iceCreamService.updateIceCream(this.newIceCream);
      this.editingIceCream = null;
    } else {
      this.iceCreamService.addIceCream(this.newIceCream);
    }
    this.newIceCream = this.getEmptyIceCream();
  }

  editIceCream(ic: IceCream): void {
    this.editingIceCream = ic;
    this.newIceCream = { ...ic };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deleteIceCream(id: number): void {
    if (confirm('Are you sure you want to remove this deliciousness?')) {
      this.iceCreamService.deleteIceCream(id);
    }
  }

  toggleStock(ic: IceCream): void {
    const updated = { ...ic, isAvailable: !ic.isAvailable };
    this.iceCreamService.updateIceCream(updated);
  }

  cancelEdit(): void {
    this.editingIceCream = null;
    this.newIceCream = this.getEmptyIceCream();
  }
}
