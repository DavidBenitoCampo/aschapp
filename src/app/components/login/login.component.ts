import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signin: FormGroup = new FormGroup({

    password: new FormControl('', [Validators.required, Validators.min(3)])
  });
  hide = true;
  get passwordInput() { return this.signin.get('password'); }


  constructor() { }

  ngOnInit(): void {
  }

}
