import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  title: string;
  language = 'RU';
  public myModel = '';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  number = new FormControl('');

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.title = 'ITMO FREE WIFI';
  }


  myControl = new FormControl('', Validators.required);


}
