import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemporizadorService {
  private tiempo = 100;

  constructor() {
  }

  private temporizador() {
    if(this.tiempo === 0) {
    } else {
      this.tiempo -= 1;
      setTimeout(() => this.temporizador(), 1000);
    }
  }
}
