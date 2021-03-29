import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkTableModule } from '@angular/cdk/table'
import { CdkTreeModule } from '@angular/cdk/tree';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CompraComponent } from './components/compra/compra.component';
import { LoginComponent } from './components/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FeedComponent } from './components/feed/feed.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMatIconBarModule } from 'ng-mat-icon-bar';
import { MatIconModule } from '@angular/material/icon'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CompraComponent,
    LoginComponent,
    CarritoComponent,
    FeedComponent,
    ContenidoComponent,
    RegistroProductoComponent,
    FooterComponent,
    HeaderComponent,
    UsuarioComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    AppRoutingModule,
    MaterialFileInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    NgMatIconBarModule,
    MatIconModule,
    CdkTableModule,
    CdkTreeModule,
    FontAwesomeModule,
    HttpClientModule,


  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
