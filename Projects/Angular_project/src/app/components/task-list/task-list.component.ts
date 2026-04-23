import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskFilter, Category } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskService = inject(TaskService);

  filters: { label: string, value: TaskFilter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
    { label: 'Important', value: 'important' }
  ];

  categories: Category[] = ['All', 'Work', 'Personal', 'Shopping', 'Health'];

  setFilter(filter: TaskFilter) {
    this.taskService.setFilter(filter);
  }

  setCategory(category: Category) {
    this.taskService.setCategory(category);
  }

  toggleTask(id: string) {
    this.taskService.toggleTask(id);
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
  }

  toggleImportant(id: string) {
    this.taskService.toggleImportant(id);
  }

  updateTask(event: { id: string, title: string }) {
    this.taskService.updateTask(event.id, { title: event.title });
  }

  clearCompleted() {
    this.taskService.clearCompleted();
  }
}
