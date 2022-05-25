import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {
  @Input() formulario: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
