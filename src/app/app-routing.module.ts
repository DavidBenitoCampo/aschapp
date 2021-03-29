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
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'home', component: FeedComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: FormularioComponent },
  { path: 'addProducto', component: RegistroProductoComponent, canActivate: [AuthGuard] },
  { path: 'pedido', component: CarritoComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
  { path: 'profile/:user_id', component: UsuarioComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

