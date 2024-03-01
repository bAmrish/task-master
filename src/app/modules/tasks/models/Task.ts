import {TaskStatusType} from "./task-status.type";

export interface Task {
  id: string;
  title: string;
  description?: string;
  isDone: boolean;
  status: TaskStatusType;
  createdDate: Date;
  dueDate?: Date;
}
