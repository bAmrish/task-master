import {Component, Input} from "@angular/core";
import {Task} from "../../models/Task";
import {TaskStatusType} from "../../models/task-status.type";
import {MatDatetimePickerInputEvent} from "@angular-material-components/datetime-picker";

@Component({
  selector: 'tm-task-list-item',
  templateUrl: './tasks-list-item.component.html',
  styleUrls: ['./tasks-list-item.component.scss']
})
export class TasksListItemComponent {
  @Input() task: Task | null = null;
  statusType = TaskStatusType;


  onDateSelect(event: MatDatetimePickerInputEvent<Date>) {
    if (this.task && event && event.value) {
      this.task.dueDate = event.value;
    }
  }
}
