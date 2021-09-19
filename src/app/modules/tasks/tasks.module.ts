import {NgModule} from "@angular/core";
import {TasksRoutingModule} from "./tasks-routing.module";
import {SharedModule} from "../shared/shared.module";
import {TasksComponent} from "./components/tasks/tasks.component";
import {CommonModule} from "@angular/common";
import {TasksListItemComponent} from "./components/task-list-item/tasks-list-item.component";
import {TaskListComponent} from "./components/task-list/task-list.component";

@NgModule({
  declarations: [TasksComponent, TaskListComponent, TasksListItemComponent],
  imports: [TasksRoutingModule, SharedModule, CommonModule]
})
export class TasksModule {
}
