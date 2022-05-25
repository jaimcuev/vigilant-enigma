import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransaccionComponent } from './transaccion/transaccion.component';

const routes: Routes = [
  { path: 'transaccion', component: TransaccionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransaccionRoutingModule { }
