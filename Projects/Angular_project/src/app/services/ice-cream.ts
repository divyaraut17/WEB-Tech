import { Injectable } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IceCreamService {
  private iceCreams: IceCream[] = [
    {
      id: 1,
      name: 'Midnight Chocolate',
      flavor: 'Chocolate',
      price: 180,
      description: 'Rich dark chocolate with fudge swirls.',
      imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=400',
      rating: 4.8,
      isAvailable: true
    },
    {
      id: 2,
      name: 'Strawberry Bliss',
      flavor: 'Strawberry',
      price: 150,
      description: 'Fresh strawberries blended with creamy vanilla.',
      imageUrl: 'https://images.unsplash.com/photo-1505394033343-4339f3b9346b?auto=format&fit=crop&q=80&w=400',
      rating: 4.5,
      isAvailable: true
    },
    {
      id: 3,
      name: 'Minty Fresh',
      flavor: 'Mint',
      price: 160,
      description: 'Cool peppermint with crunchy chocolate chips.',
      imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=400',
      rating: 4.7,
      isAvailable: true
    },
    {
      id: 4,
      name: 'Caramel Swirl',
      flavor: 'Caramel',
      price: 220,
      description: 'Sweet caramel ribbons in velvety vanilla bean ice cream.',
      imageUrl: 'https://images.unsplash.com/photo-1579954115545-a95591f28be0?auto=format&fit=crop&q=80&w=400',
      rating: 4.9,
      isAvailable: true
    }
  ];

  private iceCreamsSubject = new BehaviorSubject<IceCream[]>(this.iceCreams);

  constructor() { }

  getIceCreams(): Observable<IceCream[]> {
    return this.iceCreamsSubject.asObservable();
  }

  getIceCreamById(id: number): IceCream | undefined {
    return this.iceCreams.find(ic => ic.id === id);
  }

  addIceCream(iceCream: IceCream): void {
    const newIceCream = { ...iceCream, id: this.generateId() };
    this.iceCreams.push(newIceCream);
    this.iceCreamsSubject.next([...this.iceCreams]);
  }

  updateIceCream(updatedIceCream: IceCream): void {
    const index = this.iceCreams.findIndex(ic => ic.id === updatedIceCream.id);
    if (index !== -1) {
      this.iceCreams[index] = updatedIceCream;
      this.iceCreamsSubject.next([...this.iceCreams]);
    }
  }

  deleteIceCream(id: number): void {
    this.iceCreams = this.iceCreams.filter(ic => ic.id !== id);
    this.iceCreamsSubject.next([...this.iceCreams]);
  }

  private generateId(): number {
    return this.iceCreams.length > 0 ? Math.max(...this.iceCreams.map(ic => ic.id)) + 1 : 1;
  }
}
