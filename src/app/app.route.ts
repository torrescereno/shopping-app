
import { HomeComponent } from './home/home.component';
import { MiListaComponent } from './mi-lista/mi-lista.component';
import { ProductosComponent } from './productos/productos.component';
import { AuthComponent } from './auth/auth.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
    path: 'home',
    component: HomeComponent,
    },
    {
      path: 'nosotros',
      component: NosotrosComponent ,
    },
    {
      path: 'contacto',
      component: ContactoComponent ,
    },
    {
      path: 'lista',
      component: MiListaComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'carrito',
      component: CarritoComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'productos',
      component: ProductosComponent,
    },
    {
      path: 'login',
      component: AuthComponent,
    },
  ];

  export const routesPages = RouterModule.forRoot(routes);


