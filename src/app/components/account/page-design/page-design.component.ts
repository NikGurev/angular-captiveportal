import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-page-design',
  templateUrl: './page-design.component.html',
  styleUrls: ['./page-design.component.scss']
})
export class PageDesignComponent implements OnInit {
  fileInputName = '';
  constructor() { }

  ngOnInit() {
  }

 setFileName(inputFile: HTMLInputElement): void {
    this.fileInputName = (inputFile.files.length === 0) ? '' : inputFile.files[0].name;
  }
}
