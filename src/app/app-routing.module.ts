import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/authGuard.service';
import { InicioComponent } from './inicio/inicio.component';
import { VerificarSesionComponent } from './verificar-sesion/verificar-sesion.component';

const routes: Routes = [
  { 
    path: '', 
    component: VerificarSesionComponent 
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { 
    path: 'inicio', 
    component: InicioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transaccion',
    loadChildren: () => import('./transaccion/transaccion.module').then((m) => m.TransaccionModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
