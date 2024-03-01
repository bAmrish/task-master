import {Component, OnInit} from "@angular/core";
import {TaskService} from "../../services/task.service";
import {Task} from "../../models/Task";

@Component({
  selector: 'tm-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getAll().subscribe(data => this.tasks = data);
  }

  onTaskDelete(task: Task) {
    this.taskService.delete(task);
  }
}
