import {AfterViewInit, Component, Input} from "@angular/core";
import Quill from "quill";

@Component({
  selector: 'tm-task-description',
  templateUrl: './task-description.component.html',
  styleUrls: ['./task-description.component.scss']
})
export class TaskDescriptionComponent implements AfterViewInit {
  @Input() description: string = '';
  id: string = '';
  editor: Quill | null = null;
  toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{'header': 1}, {'header': 2}],               // custom button values
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
    [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
    [{'direction': 'rtl'}],                         // text direction

    [{'size': ['small', 'normal', 'large', 'huge']}],  // custom dropdown
    [{'color': []}, {'background': []}],          // dropdown with defaults from theme
    [{'font': []}],
    [{'align': []}],

    ['clean']                                         // remove formatting button
  ];

  richFormat = false;

  @Input() set taskId(inputTaskId: string) {
    this.id = "editor-" + inputTaskId;
    console.log(this.id);
  };

  ngAfterViewInit() {
    if(this.richFormat) {
      this.editor = new Quill("#" + this.id,
        {
          theme: 'snow',
          modules: {
            toolbar: this.toolbarOptions
          }
        }
      );
    }
  }
}
