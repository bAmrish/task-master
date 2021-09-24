import {Component, ViewChild} from "@angular/core";
import {TaskService} from "../../services/task.service";
import {TaskStatusType} from "../../models/task-status.type";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'tm-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {

  title: string = '';
  dueDate: Date | null = null;
  // @ts-ignore
  @ViewChild("newTaskForm") form: NgForm;

  constructor(private taskService: TaskService) {
  }

  onAdd() {
    if (!this.form.valid) {
      return;
    }
    let task = this.taskService.newTask(this.title, '', TaskStatusType.NEW);
    if (this.dueDate != null) {
      task.dueDate = this.dueDate;
    }
    this.taskService.add(task);
    this.title = '';
    this.form.reset();
  }

  removeDueDate() {
    this.dueDate = null;
  }
}
