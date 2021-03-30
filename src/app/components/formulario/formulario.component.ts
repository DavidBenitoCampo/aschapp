import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  files;

  constructor(private usersService: UsersService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl,
      apellidos: new FormControl,
      fecha_nacimiento: new FormControl,
      email: new FormControl,
      nickname: new FormControl,
      contrasena: new FormControl,
      confirmar_contrasena: new FormControl,
      rol: new FormControl
    })
  }

  ngOnInit(): void {


  }

  async onSubmit() {
    // Creación del objeto donde incluimos todos los campos del formulario y además la imagen
    let fd = new FormData();
    fd.append('nombre', this.formulario.value.nombre);
    fd.append('apellidos', this.formulario.value.apellidos);
    fd.append('fecha_nacimiento', this.formulario.value.fecha_nacimiento);
    fd.append('email', this.formulario.value.email);
    fd.append('nickname', this.formulario.value.nickname);
    fd.append('contrasena', this.formulario.value.contrasena);
    fd.append('rol', this.formulario.value.rol);
    if (this.files && this.files.length > 0) {
      fd.append('foto', this.files[0])
    };

    //  Delegamos el envío del formulario en el servicio
    this.usersService.insert(fd).then(result => {
      this.router.navigate(['']);
      console.log(result);
    })
  }

  onChange($event) {
    this.files = $event.target.files;
  }
}


