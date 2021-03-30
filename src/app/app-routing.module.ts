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
<<<<<<< HEAD
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
=======
import { AuthGuard } from './guards/auth.guard'
>>>>>>> 727bd6d520f9e0b73a02aecbeb8d3f81d78603a4

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'home', component: FeedComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: FormularioComponent },
<<<<<<< HEAD
  { path: 'addProducto', component: RegistroProductoComponent },
  { path: 'pedido', component: CarritoComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'profile/:user_id', component: UsuarioComponent },
  { path: 'miPerfil', component: MiPerfilComponent },
  { path: 'editarPerfil', component: EditarPerfilComponent },
=======
  { path: 'addProducto', component: RegistroProductoComponent, canActivate: [AuthGuard] },
  { path: 'pedido', component: CarritoComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
  { path: 'profile/:user_id', component: UsuarioComponent, canActivate: [AuthGuard] },
>>>>>>> 727bd6d520f9e0b73a02aecbeb8d3f81d78603a4
  { path: '**', redirectTo: '/home' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

