import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltasComponent } from './pages/altas/altas.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ModificacionesComponent } from './pages/modificaciones/modificaciones.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/home' , pathMatch: 'full'
  },
  {path:'home', component:HomeComponent
  },
  {path:'listado', component:ListadoComponent
},
  {
    path:'altas', component:AltasComponent
  },
  {
    path:'modificaciones/:id', component:ModificacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
