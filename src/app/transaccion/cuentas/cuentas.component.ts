import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  @Input() formulario: any;

  ngOnInit(): void {
  }
}
