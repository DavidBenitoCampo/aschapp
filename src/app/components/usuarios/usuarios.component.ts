import { Component, OnInit } from '@angular/core';
import { user, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  arrUsuarios: user[]

  constructor(private usersService: UsersService) {

    this.arrUsuarios = []

  }

  ngOnInit(): void {
    this.usersService.getAll()
      .then(response => {
        this.arrUsuarios = response;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
