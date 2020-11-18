import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MiListaComponent } from './mi-lista/mi-lista.component';
import { ProductosComponent } from './productos/productos.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

// Routing
import { routesPages } from './app.route';
import { DescuentoPipe } from './pipes/descuento.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MiListaComponent,
    ProductosComponent,
    ErrorComponent,
    LoginComponent,
    RegistroComponent,
    DescuentoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    routesPages,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
