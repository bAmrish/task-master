import {Component, Input} from "@angular/core";
import {Task} from "../../models/Task";

@Component({
  selector: 'tm-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent{
  @Input() tasks: Task[] = [];
}
