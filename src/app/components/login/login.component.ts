import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signin: FormGroup;
  errorMessage: string;

  hide = true;
  get passwordInput() { return this.signin.get('password'); }

  constructor(private usersService: UsersService,
    private router: Router) {
    this.signin = new FormGroup({
      email: new FormControl(),
      contrasena: new FormControl('', [Validators.required, Validators.min(5)])
    });




  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.errorMessage = null;
    this.usersService.login(this.signin.value)
      .then(response => {
        console.log(response)
        if (response.error) {
          setTimeout(() => this.errorMessage = 'Te has equivocado!', 500);
          this.usersService.logueado = false;
        } else {
          localStorage.setItem('token_user', response.token)
          this.router.navigate(['/feed']);
          this.usersService.logueado = true;
        }
      })

      .catch(error => {
        console.log(error)
      })
  }

}
