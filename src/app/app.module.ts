import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CompraComponent } from './components/compra/compra.component';
import { LoginComponent } from './components/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FeedComponent } from './components/feed/feed.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CompraComponent,
    LoginComponent,
    CarritoComponent,
    FeedComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
