import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.scss']
})
export class TransaccionComponent implements OnInit {
  public steps = [
    { id: 1, name: 'Cuentas' },
    { id: 2, name: 'Transferencia' },
    { id: 3, name: 'Resumen' }
  ];

  public currentStep: number = 1;

  public formulario = new FormGroup({
    cuenta: new FormGroup({
      cuentaOrigen: new FormControl('', Validators.required),
      cuentaDestino: new FormControl('', Validators.required),
      moneda: new FormControl('PEN', Validators.required),
      monto: new FormControl('', Validators.required)
    })
  });

  ngOnInit(): void {
  }

  onClickVolver() {
    if( this.currentStep > 1 ) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if( this.currentStep < 3 ) {
      this.currentStep++;
    }
  }
}
