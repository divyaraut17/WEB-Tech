import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input({ required: true }) task!: Task;
  @Output() toggle = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();
  @Output() toggleImportant = new EventEmitter<string>();
  @Output() update = new EventEmitter<{ id: string, title: string }>();

  isEditing = signal(false);
  editTitle = signal('');

  onToggle() {
    this.toggle.emit(this.task.id);
  }

  onDelete() {
    this.delete.emit(this.task.id);
  }

  onToggleImportant() {
    this.toggleImportant.emit(this.task.id);
  }

  startEdit() {
    this.editTitle.set(this.task.title);
    this.isEditing.set(true);
  }

  saveEdit() {
    const title = this.editTitle().trim();
    if (title && title !== this.task.title) {
      this.update.emit({ id: this.task.id, title });
    }
    this.isEditing.set(false);
  }

  cancelEdit() {
    this.isEditing.set(false);
  }

  getRelativeTime(): string {
    const now = Date.now();
    const diff = Math.floor((now - this.task.createdAt) / 1000); // seconds

    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  }
}
