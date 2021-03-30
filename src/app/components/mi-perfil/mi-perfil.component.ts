import { Component, OnInit } from '@angular/core';
import { UsersService, user } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit {

  user: user;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {

    this.user = await this.usersService.getMyProfile();
  }

}
