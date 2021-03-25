import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: FeedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: FormularioComponent },
  { path: 'addProducto', component: RegistroProductoComponent },
  { path: 'pedido', component: CarritoComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'profile', component: UsuarioComponent },
  { path: '**', redirectTo: '/home' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

