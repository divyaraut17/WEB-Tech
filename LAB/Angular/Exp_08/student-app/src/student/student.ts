import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  name : string = 'divya raut';
  age : number = 20;
  grade : string = 'A'; 

  changeDetails() {
    this.name = 'divya raut';
    this.age = 20;
    this.grade = 'A';
  }

  city: string[] = ['Pune', 'Mumbai', 'Nashik'];
}
