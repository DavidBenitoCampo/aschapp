import { Component, OnInit } from '@angular/core';
import { user, UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  arrUsuarios: user[]
  user: user;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) {

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

    this.activatedRoute.params.subscribe(async params => {
      const user = await this.usersService.getUserById(params.users_id);
      this.user = user[0]
    })
  }

}
