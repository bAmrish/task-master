import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TasksComponent} from "./components/tasks/tasks.component";

const ROUTES: Routes = [{
  path: 'tasks',
  component: TasksComponent
}];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class TasksRoutingModule {
}
