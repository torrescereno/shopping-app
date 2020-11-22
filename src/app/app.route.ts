
import { HomeComponent } from './home/home.component';
import { MiListaComponent } from './mi-lista/mi-lista.component';
import { ProductosComponent } from './productos/productos.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';


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
      path: 'lista',
      component: MiListaComponent,
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


