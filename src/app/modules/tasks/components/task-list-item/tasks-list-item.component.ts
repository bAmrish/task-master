import {Component, EventEmitter, Input, Output} from "@angular/core";
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
  @Output() delete: EventEmitter<Task> = new EventEmitter<Task>()
  statusType = TaskStatusType;


  onDateSelect(event: MatDatetimePickerInputEvent<Date>) {
    if (this.task && event && event.value) {
      this.task.dueDate = event.value;
    }
  }

  removeDueDate() {
    if(this.task?.dueDate) {
      this.task.dueDate = undefined;
    }
  }

  onDelete() {
    if(this.task){
      this.delete.emit(this.task);
    }
  }
}
