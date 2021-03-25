import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.scss']
})
export class RegistroProductoComponent implements OnInit {

  formulario: FormGroup;
  files;

  constructor(private productoService: ProductoService,
    private router: Router) {
    this.formulario = new FormGroup({
      tipo_producto: new FormControl(),
      precio: new FormControl(),
      producto: new FormControl()

    })

  }


  ngOnInit(): void {
  }

  async onSubmit() {
    let fd = new FormData();
    fd.append('tipo_producto', this.formulario.value.tipo_producto);
    fd.append('precio', this.formulario.value.precio);
    fd.append('producto', this.formulario.value.producto);
    fd.append('imagen', this.files);

    //  Delegamos el envío del formulario en el servicio
    this.productoService.insert(fd).then(result => {
      this.router.navigate(['']);
    })
  }

}

