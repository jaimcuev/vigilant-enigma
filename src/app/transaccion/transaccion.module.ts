import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TransaccionRoutingModule } from './transaccion-routing.module';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { ResumenComponent } from './resumen/resumen.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { TransaccionComponent } from './transaccion/transaccion.component';


@NgModule({
  declarations: [
    TransferenciaComponent,
    CuentasComponent,
    ResumenComponent,
    TransaccionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TransaccionRoutingModule
  ]
})
export class TransaccionModule { }
