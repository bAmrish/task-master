import {Task} from "../models/Task";
import {BehaviorSubject, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {TaskStatusType} from "../models/task-status.type";

@Injectable({providedIn: 'root'})
export class TaskService {

  private TASK_1_DESC: string = `
  The public description of sanity takes into account the morality of demographic will.
  Pedagogic submission of mutiny is not worth to the paragon of excellence.

  - Unknown Source
 `;

  private tasks: Task[] = [
    this.new('Buy Milk', this.TASK_1_DESC, TaskStatusType.NEW),
    this.new('get work done', 'Finally get some work done! ', TaskStatusType.DONE)
  ];

  private tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.tasks);

  getAll(): Observable<Task[]> {
    this.tasks[0].dueDate = new Date("2021-09-28 11:59:59");
    return this.tasks$;
  }

  new(title = '', description = '', status: TaskStatusType): Task {
    return {
      id: this.uuidv4(), title, description, status, createdDate: new Date(), isDone: false
    }
  }

  add(task: Task) {
    this.tasks.push(task);
    this.tasks$.next(this.tasks);
  }

  delete(task: Task) {

    const deletedTask: Task | null = this.getTask(task.id);

    if (deletedTask == null) {
      return;
    }

    const deletedTaskId = this.tasks.indexOf(deletedTask);
    this.tasks.splice(deletedTaskId, 1);
  }

  save(task: Task) {

  }

  private getTask(taskId: string): Task | null {
    if (!taskId) {
      return null;
    }

    const tasks = this.tasks.filter(t => t.id === taskId);

    if (tasks.length == 0) {
      console.warn("No task found.");
      return null;
    }

    if (tasks.length > 1) {
      console.warn("Multiple Task found.");
      return null;
    }
    return tasks[0];
  }

  // noinspection SpellCheckingInspection
  private uuidv4(): string {
    return ("1e7-1e3-4e3-8e3-1e11").replace(/[018]/g, (c): string => {
        const n = parseInt(c, 10);
        return (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)
      }
    );
  }
}
