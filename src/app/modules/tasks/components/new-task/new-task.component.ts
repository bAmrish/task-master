import {Component} from "@angular/core";
import {TaskService} from "../../services/task.service";
import {TaskStatusType} from "../../models/task-status.type";

@Component({
  selector: 'tm-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {

  title: string = '';
  dueDate: Date | null = null;

  constructor(private taskService: TaskService) {
  }

  onAdd() {
    let task = this.taskService.newTask(this.title, '', TaskStatusType.NEW);
    if (this.dueDate != null) {
      task.dueDate = this.dueDate;
    }
    this.taskService.add(task);
    this.title = '';
  }
}
