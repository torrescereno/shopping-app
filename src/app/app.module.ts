import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MiListaComponent } from './mi-lista/mi-lista.component';
import { ProductosComponent } from './productos/productos.component';
import { ErrorComponent } from './error/error.component';
import { AuthComponent } from './auth/auth.component';
import { DescuentoPipe } from './pipes/descuento.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { routesPages } from './app.route';
import { UsuarioComponent } from './usuario/usuario.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MiListaComponent,
    ProductosComponent,
    ErrorComponent,
    AuthComponent,
    DescuentoPipe,
    UsuarioComponent,
    NosotrosComponent,
    ContactoComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    routesPages,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
