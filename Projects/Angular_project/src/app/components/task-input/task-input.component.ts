import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Priority, Category } from '../../models/task.model';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {
  private taskService = inject(TaskService);
  
  taskTitle = signal('');
  priority = signal<Priority>('medium');
  category = signal<Category>('Personal');
  isImportant = signal(false);

  categories: Category[] = ['Work', 'Personal', 'Shopping', 'Health'];

  addTask() {
    const title = this.taskTitle().trim();
    if (title) {
      this.taskService.addTask(
        title, 
        this.priority(), 
        this.category(), 
        this.isImportant()
      );
      this.resetForm();
    }
  }

  toggleImportant() {
    this.isImportant.update(v => !v);
  }

  private resetForm() {
    this.taskTitle.set('');
    this.priority.set('medium');
    this.category.set('Personal');
    this.isImportant.set(false);
  }
}
