import {Task} from "../models/Task";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {TaskStatusType} from "../models/task-status.type";

@Injectable({providedIn: 'root'})
export class TaskService {

  getTasks(): Observable<Task[]> {

    const task1description = `
      Said female of can't you're him were make called living place were heaven land air.
      Without saying heaven every thing, replenish. Whose.
      Morning form isn't earth one don't they're. Firmament man so forth second.
      Likeness. One divided all Man days gathered subdue life forth can't set shall can't fowl.
      After Whose that fourth. So winged tree Image face moveth. Isn't behold appear man. Said.
      They're isn't brought fifth open over for fly lights, it. Abundantly seed. Gathering.
      Whose have set abundantly man replenish don't god saw life fruitful sixth stars fourth.
      Morning bring fly he living whose upon isn't called.
  `;

    const tasks: Task[] = [
      this.newTask('Buy Milk', task1description, TaskStatusType.NEW),
      this.newTask('get work done', 'Finally get some work done! ', TaskStatusType.DONE)
    ];

    return of(tasks);
  }

  newTask(title = '', description = '', status: TaskStatusType): Task {
    return {
      id: this.uuidv4(), title, description, status, createdDate: new Date()
    }
  }

  // noinspection SpellCheckingInspection
  private uuidv4(): string {
    return ("[1e7]+-1e3+-4e3+-8e3+-1e11").replace(/[018]/g, (c): string => {
        const n = parseInt(c, 10);
        return (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)
      }
    );
  }
}
