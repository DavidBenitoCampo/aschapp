import { Component, OnInit } from '@angular/core';
import { UsersService, user } from 'src/app/services/users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  formulario: FormGroup;
  user: user

  constructor(private usersServices: UsersService, private router: Router) {

  }

  async ngOnInit() {

    const user = await this.usersServices.getMyProfile();
    this.user = user
    console.log(user);
    this.formulario = new FormGroup({
      nombre: new FormControl(this.user.nombre),
      apellidos: new FormControl(this.user.apellidos),
      nickname: new FormControl(this.user.nickname),
      rol: new FormControl(this.user.rol)
    })
  }

  async onSubmit() {
    const response = await this.usersServices.updateUser(this.formulario.value)
    this.router.navigate(['/miPerfil'])
  }

}
