
import { HomeComponent } from './home/home.component';
import { MiListaComponent } from './mi-lista/mi-lista.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';


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
      component: LoginComponent,
    },
    {
      path: 'registro',
      component: RegistroComponent,
    }
  ];

  export const routesPages = RouterModule.forRoot(routes);


