import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import { FileHandle } from './file-handle model';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

@Output() files:EventEmitter<FileHandle>=new EventEmitter();


  @HostBinding("style.background" )private background = "#eee";
  sanitizer: any;
  constructor() { }

  @HostListener("dragover", ["$event"])
  public onDragOver(evt: DragEvent){
  evt.preventDefault();
  evt.stopPropagation();
  this.background="#999";
  }

  @HostListener("dragleave",["$event"])
  public onDragLeave(evt:DragEvent){
    evt.preventDefault();
  evt.stopPropagation();
  this.background="#eee";

  }

@HostListener("drop",["$event"])
  public onDrop(evt: DragEvent){
    evt.preventDefault();
  evt.stopPropagation();
  this.background="#eee";

  const files = evt.dataTransfer?.files[0]; // Corrected variable name
  const url = files ? window.URL.createObjectURL(files) : '';

  const fileHandle: FileHandle = { file: files, url: url }; // Corrected variable name
  this.files.emit(fileHandle);

  }
}
