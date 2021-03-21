import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl,
      apellidos: new FormControl,
      edad: new FormControl,
      email: new FormControl,
      nickname: new FormControl,
      contraseña: new FormControl,
      confirmar_contraseña: new FormControl,
      imagen: new FormControl,
      rol: new FormControl
    })
  }

  ngOnInit(): void {


  }

  onSubmit() {
    console.log(this.formulario.value);

  }

}


