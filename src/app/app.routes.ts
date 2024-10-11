import { Routes } from '@angular/router';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { DetallesDeProductosComponent } from './detalles-de-productos/detalles-de-productos.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';

export const routes: Routes = [
   {path:'',redirectTo:'listar',pathMatch:'full'},
   {path:'listar',component:ListarProductosComponent},
   {path: 'detalles/:id', component: DetallesDeProductosComponent },
   {path: 'agregar', component: AgregarProductosComponent }

];
