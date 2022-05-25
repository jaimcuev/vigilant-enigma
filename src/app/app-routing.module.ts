import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TransaccionModule } from './transaccion/transaccion.module';
import { VerificarSesionComponent } from './verificar-sesion/verificar-sesion.component';

const routes: Routes = [
  { path: '', component: VerificarSesionComponent },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TransaccionModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
