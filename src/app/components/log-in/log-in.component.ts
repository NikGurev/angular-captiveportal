import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  title: string;
  authForm: FormGroup;
  public myModel = '';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.title = 'ITMO FREE WIFI';
    this.initForm();
  }

  private initForm() {
    let telephoneNumber = '';
    this.authForm = new FormGroup({
      tel: new FormControl(telephoneNumber, [
        Validators.required
      ]),
      agreement: new FormControl('', Validators.required)
    });
  }

  private onSubmit() {
    console.log(this.authForm);
  }


}
