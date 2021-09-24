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
    this.newTask('Buy Milk', this.TASK_1_DESC, TaskStatusType.NEW),
    this.newTask('get work done', 'Finally get some work done! ', TaskStatusType.DONE)
  ];

  private tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.tasks);

  getTasks(): Observable<Task[]> {
    this.tasks[0].dueDate = new Date("2021-09-28 11:59:59");
    return this.tasks$;
  }

  newTask(title = '', description = '', status: TaskStatusType): Task {
    return {
      id: this.uuidv4(), title, description, status, createdDate: new Date()
    }
  }

  add(task: Task) {
    this.tasks.push(task);
    this.tasks$.next(this.tasks);
  }

  delete(task: Task) {
    if (!task || !task.id) {
      return;
    }

    const deletedTasks = this.tasks.filter(t => t.id === task.id);
    if (deletedTasks.length == 0) {
      console.warn("No task found in the list.");
      return;
    }
    if (deletedTasks.length > 1) {
      console.warn("Multiple tasks found. Skipping deleting.");
      return;
    }
    const deletedTask = deletedTasks[0];
    const deletedTaskId = this.tasks.indexOf(deletedTask);
    this.tasks.splice(deletedTaskId, 1);
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
