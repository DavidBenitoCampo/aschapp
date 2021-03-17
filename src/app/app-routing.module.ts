import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: FeedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: FormularioComponent },
  { path: 'addProducto', component: RegistroProductoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', redirectTo: '/home' }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
