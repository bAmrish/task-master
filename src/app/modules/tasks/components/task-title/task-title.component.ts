import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from "@angular/core";

@Component({
  selector: 'tm-task-title',
  templateUrl: './task-title.component.html',
  styleUrls: ['./task-title.component.scss']
})
export class TaskTitleComponent implements OnChanges {
  @Input() title: string = '';
  @Input() isEditable = false;

  @Output() inputClick = new EventEmitter<string>();
  @Output() focusLost = new EventEmitter<string>();

  input: HTMLInputElement | null = null;

  // @ts-ignore
  @ViewChild("input") set inputRef(element: ElementRef) {
    if (element) {
      this.input = element.nativeElement;
    } else {
      this.input = null;
    }
  };

  ngOnChanges(changes: SimpleChanges) {
    for (const property in changes) {
      if (property === 'isEditable') {
        const change = changes[property];
        if (change.currentValue) {
          setTimeout(() => this.input?.focus(), 1);
        }
      }
    }
  }

  onNonEditableTitleClick() {
    this.inputClick.emit(this.title);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (event.target != this.input) {
      this.focusLost.emit(this.title);
    }
  }
}
