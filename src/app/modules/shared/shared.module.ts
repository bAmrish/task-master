import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatNativeDateModule} from "@angular/material/core";
import {FlexLayoutModule} from "@angular/flex-layout";

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatTableModule,
  MatCheckboxModule,
  MatRadioModule,
  MatExpansionModule,
  MatNativeDateModule
];

@NgModule({
  imports: [...MATERIAL_MODULES, FlexLayoutModule],
  exports: [...MATERIAL_MODULES, FlexLayoutModule]
})
export class SharedModule {
}
