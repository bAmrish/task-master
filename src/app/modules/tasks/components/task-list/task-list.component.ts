import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Task} from "../../models/Task";

@Component({
  selector: 'tm-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent{
  @Input() tasks: Task[] = [];
  @Output() delete: EventEmitter<Task> = new EventEmitter<Task>();


  onTaskDelete(task: Task) {
    this.delete.emit(task);
  }
}
