import {TaskStatusType} from "./task-status.type";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatusType;
  createdDate: Date;
  dueDate?: Date;
}
