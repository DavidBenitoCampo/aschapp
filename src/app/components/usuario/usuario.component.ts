import { Component, OnInit } from '@angular/core';
import { UsersService, user } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { product, ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  user: user;
  arrProductos: product[]

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute, private productsService: ProductoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      const user = await this.usersService.getUserById(params.user_id);
      this.user = user
      console.log(user)
      console.log(params.user_id)
      this.arrProductos = await this.productsService.getProductByUserId(params.user_id);
      console.log(this.arrProductos);
    })


  }

}
