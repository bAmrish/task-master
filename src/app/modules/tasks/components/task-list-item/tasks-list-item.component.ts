import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Task} from "../../models/Task";
import {MatDatetimePickerInputEvent} from "@angular-material-components/datetime-picker";

@Component({
  selector: 'tm-task-list-item',
  templateUrl: './tasks-list-item.component.html',
  styleUrls: ['./tasks-list-item.component.scss']
})
export class TasksListItemComponent {
  @Input() task: Task | null = null;
  @Output() delete = new EventEmitter<Task>();

  editable = false;

  onDateSelect(event: MatDatetimePickerInputEvent<Date>) {
    if (this.task && event && event.value) {
      this.task.dueDate = event.value;
    }
  }

  removeDueDate() {
    if (this.task?.dueDate) {
      this.task.dueDate = undefined;
    }
  }

  onDelete() {
    if (this.task) {
      this.delete.emit(this.task);
    }
  }

  onEditClick(event: Event) {
    this.editable = true;
    event.stopPropagation();
  }

  onFocusLost() {
    if (this.editable) {
      setTimeout(() => this.editable = false, 10);
      console.log(this.task);
    }
  }

  onInputClick() {
    this.editable = true;
  }
}
