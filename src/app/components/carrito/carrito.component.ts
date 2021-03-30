import { Component, OnInit } from '@angular/core';

import { product, ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  arrProducts: product[];

  constructor(private productoService: ProductoService) {
    this.arrProducts = []
  }

  ngOnInit() {
    this.productoService.getToCarrito()
      .then(response => {
        console.log(response);
        this.arrProducts = response;
      })
      .catch(error => console.log(error));
  }

}
