import { Injectable, signal, computed, effect } from '@angular/core';
import { Task, TaskFilter, Priority, Category } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSignal = signal<Task[]>(this.loadTasks());
  private filterSignal = signal<TaskFilter>('all');
  private categorySignal = signal<Category>('All');

  tasks = computed(() => this.tasksSignal());
  filter = computed(() => this.filterSignal());
  selectedCategory = computed(() => this.categorySignal());

  filteredTasks = computed(() => {
    let tasks = this.tasksSignal();
    const filter = this.filterSignal();
    const category = this.categorySignal();

    // Filter by completion status
    if (filter === 'active') tasks = tasks.filter(t => !t.completed);
    else if (filter === 'completed') tasks = tasks.filter(t => t.completed);
    else if (filter === 'important') tasks = tasks.filter(t => t.important);

    // Filter by category
    if (category !== 'All') {
      tasks = tasks.filter(t => t.category === category);
    }

    // Sort: Important first, then by date (newest first)
    return [...tasks].sort((a, b) => {
      if (a.important !== b.important) return a.important ? -1 : 1;
      return b.createdAt - a.createdAt;
    });
  });

  stats = computed(() => {
    const tasks = this.tasksSignal();
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    return {
      total,
      active: total - completed,
      completed,
      progress
    };
  });

  constructor() {
    effect(() => {
      localStorage.setItem('tasks', JSON.stringify(this.tasksSignal()));
    });
  }

  private loadTasks(): Task[] {
    const saved = localStorage.getItem('tasks');
    if (!saved) return [];
    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  }

  addTask(title: string, priority: Priority = 'medium', category: Category = 'Personal', important: boolean = false) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      priority,
      category,
      important,
      createdAt: Date.now()
    };
    this.tasksSignal.update(tasks => [newTask, ...tasks]);
  }

  updateTask(id: string, updates: Partial<Task>) {
    this.tasksSignal.update(tasks => 
      tasks.map(t => t.id === id ? { ...t, ...updates, updatedAt: Date.now() } : t)
    );
  }

  deleteTask(id: string) {
    this.tasksSignal.update(tasks => tasks.filter(t => t.id !== id));
  }

  toggleTask(id: string) {
    this.tasksSignal.update(tasks => 
      tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }

  toggleImportant(id: string) {
    this.tasksSignal.update(tasks => 
      tasks.map(t => t.id === id ? { ...t, important: !t.important } : t)
    );
  }

  setFilter(filter: TaskFilter) {
    this.filterSignal.set(filter);
  }

  setCategory(category: Category) {
    this.categorySignal.set(category);
  }

  clearCompleted() {
    this.tasksSignal.update(tasks => tasks.filter(t => !t.completed));
  }
}
