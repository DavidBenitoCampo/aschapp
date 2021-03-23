import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usersService: UsersService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl,
      apellidos: new FormControl,
      fecha_nacimiento: new FormControl,
      email: new FormControl,
      nickname: new FormControl,
      contrasena: new FormControl,
      confirmar_contrasena: new FormControl,
      foto: new FormControl,
      rol: new FormControl
    })
  }

  ngOnInit(): void {


  }

  async onSubmit() {
    const response = await this.usersService.insert(this.formulario.value)
    console.log(response);
    this.router.navigate(['/'])
  }

}


