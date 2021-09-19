import {Component, Input} from "@angular/core";
import {Task} from "../../models/Task";
import {TaskStatusType} from "../../models/task-status.type";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

@Component({
  selector: 'tm-task-list-item',
  templateUrl: './tasks-list-item.component.html',
  styleUrls: ['./tasks-list-item.component.scss']
})
export class TasksListItemComponent {
  @Input() task: Task | null = null;
  statusType = TaskStatusType;


  onDateSelect(event: MatDatepickerInputEvent<Date>) {
    if (this.task && event && event.value) {
      this.task.dueDate = event.value;
      this.task.dueDate.setHours(8);
    }
  }
}
