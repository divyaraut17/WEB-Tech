export type Priority = 'low' | 'medium' | 'high';
export type Category = 'All' | 'Work' | 'Personal' | 'Shopping' | 'Health';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  category: Category;
  important: boolean;
  createdAt: number; // timestamp
  updatedAt?: number;
}

export type TaskFilter = 'all' | 'active' | 'completed' | 'important';
