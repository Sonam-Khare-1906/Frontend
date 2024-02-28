import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FileHandle } from '../file-handle model';

@Component({
  selector: 'app-showproductimages',
  templateUrl: './showproductimages.component.html',
  styleUrls: ['./showproductimages.component.css']
})
export class ShowproductimagesComponent implements OnInit {

  images!: FileHandle[]; // Add this property to hold the images

  constructor(@Inject(MAT_DIALOG_DATA) public data: { images: FileHandle[] }) {}

  ngOnInit(): void {
    this.receiveImages();
  }

  receiveImages() {
    console.log(this.data);
  }
}