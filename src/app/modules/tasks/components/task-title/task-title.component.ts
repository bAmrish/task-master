import {Component, ElementRef, HostListener, Input, ViewChild} from "@angular/core";

@Component({
  selector: 'tm-task-title',
  templateUrl: './task-title.component.html',
  styleUrls: ['./task-title.component.scss']
})
export class TaskTitleComponent {
  @Input() title: string = '';
  isEditable = false;
  input: HTMLInputElement | null = null;

  // @ts-ignore
  @ViewChild("input") set inputRef(element: ElementRef) {
    if (element) {
      this.input = element.nativeElement;
    } else {
      this.input = null;
    }
  };

  toggleEdit() {
    this.isEditable = !this.isEditable;
    setTimeout(() => this.input?.focus(), 1)

  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (event.target != this.input) {
      this.isEditable = false;
    }
  }
}
