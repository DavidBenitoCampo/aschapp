import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.scss']
})
export class RegistroProductoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private productoService: ProductoService,
    private router: Router) {
    this.formulario = new FormGroup({
      tipo_producto: new FormControl(),
      precio: new FormControl(),
      producto: new FormControl(),


    })
  }


  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.productoService.insert(this.formulario.value);
    console.log(response)
    //Con esto le paso la ruta hacia donde lo quiero mover al hacer submit.
    this.router.navigate(['/'])
  }
}
