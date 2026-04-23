import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  fname: string = 'divya';
  age: number = 22;
  email: string = 'divya@example.com';
  
  updateAdmin() {
    this.fname = 'divya updated';
    this.age = 23;
    this.email = 'divya.updated@example.com';
  }

}

