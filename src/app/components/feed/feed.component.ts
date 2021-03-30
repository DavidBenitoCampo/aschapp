import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  products: any;

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getAllProducts()
      .then(response => {
        console.log(response);
        this.products = response;

      })
      .catch(error => console.log(error));
  }

  async onChange($event) {
    try {
      if ($event.target.value === 'todos') {
        this.products = await this.productoService.getAllProducts();
      } else {
        this.products = await this.productoService.getByCategory($event.target.value);
      }
    } catch (error) {
      console.log(error);
    }
  }

}
